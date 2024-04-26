import Markdoc from '@markdoc/markdoc';
import { json } from '@sveltejs/kit';
import yaml from 'js-yaml';
import pMap from 'p-map';
import path from "path";

export const load = async () => {

    const modules = await import.meta.glob('../../lib/blog/*.md', { as: 'raw' });
    const posts: any = await pMap(Object.entries(modules), async function([filename, content]) {
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
                
            return {
                path: realName,
                title: frontmatter.title,
                author: frontmatter.author,
                date: frontmatter.date,
                categories: frontmatter.categories?.split(','),
                description: frontmatter.description
                }; 

    });

    return {
        posts: posts
    }

};

