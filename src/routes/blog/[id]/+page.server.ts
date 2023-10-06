
export const load = async ({ params, url }: any) => {
    const file = await import(`../../../lib/blog/${params.id}.md?raw`);
    const markdown = file.default;
    const convertedMarkdown = String(markdown)

    
    return { id: params.id, document: convertedMarkdown }
};
