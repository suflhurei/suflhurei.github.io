import Markdoc from '@markdoc/markdoc';
import { json } from '@sveltejs/kit';
import yaml from 'js-yaml';
import pMap from 'p-map';
import path from "path";


export async function GET() {
    const modules = await import.meta.glob('../../../lib/blog/*.md', { as: 'raw' });
    const posts = await pMap(Object.entries(modules), async function([filename, content]) {
        const document = await content();

        const name = path.basename(filename)

        const realName = `${name.slice(0, -3)}`


        const ast = Markdoc.parse(document);

    	type Frontmatter = {
            title?: string;
            author?: string;
            date?: Date;
            categories?: string;
            description?: string;
        };
    
        const frontmatter = ast.attributes.frontmatter
            ? (yaml.load(ast.attributes.frontmatter) as Frontmatter)
            : {}

        const categories = frontmatter.categories.split(',')

	return {
        path: realName,
        title: frontmatter.title,
        author: frontmatter.author,
        date: frontmatter.date,
        categories: categories,
        desc: frontmatter.description

	    };   
    });
    return json({
        body: { posts }
    });
};