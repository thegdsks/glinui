import fs from 'fs';
import path from 'path';
import { u } from 'unist-builder';
import { visit } from 'unist-util-visit';
import { Node } from 'unist'; // Use official types from `unist`
import { registry } from '../registry';

export function rehypeComponent() {
  return async (tree: Node) => {
    // Use `Node` as the type for the tree
    visit(tree, 'element', (node: any) => {
      // Cast `node` as `any` for flexibility

      const { value: src } = getNodeAttributeByName(node, 'src') || {};

      if (node.tagName === 'ComponentSource') {
        // Access `tagName` only if `node` is an element
        const name = getNodeAttributeByName(node, 'name')?.value as string;

        if (!name) {
          return null;
        }

        try {
          const component = registry[name];
          const src = component.files[0];

          // Read the source file.
          const filePath = path.join(process.cwd(), src);
          let source = fs.readFileSync(filePath, 'utf8');

          // Replace imports.
          source = source.replaceAll(`@/registry/`, '@/');

          // Add code as children so that rehype can process it at build time.
          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {
                __src__: src,
              },
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  data: {
                    meta: `event="copy_source_code"`,
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }

      if (
        node.tagName === 'ComponentPreview' ||
        node.tagName === 'BlockPreview'
      ) {
        const name = getNodeAttributeByName(node, 'name')?.value as string;

        if (!name) {
          return null;
        }

        try {
          const component = registry[name];
          const src = component.files[0];

          // Read the source file.
          const filePath = path.join(process.cwd(), src);
          let source = fs.readFileSync(filePath, 'utf8');

          // Replace imports.
          source = source.replaceAll(`@/registry/`, '@/');
          source = source.replaceAll('export default', 'export');

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u('element', {
              tagName: 'pre',
              properties: {
                __src__: src,
              },
              children: [
                u('element', {
                  tagName: 'code',
                  properties: {
                    className: ['language-tsx'],
                  },
                  data: {
                    meta: `event="copy_usage_code"`,
                  },
                  children: [
                    {
                      type: 'text',
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: any, name: string) {
  return node.properties?.attributes?.find((attr: any) => attr.name === name);
}
