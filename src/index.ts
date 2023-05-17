import openapiTS from 'openapi-typescript';

async function generateTypesFromSchema(): Promise<string> {
  const localPath = new URL('api.yml', import.meta.url); // may be YAML or JSON format
  const output = await openapiTS(localPath);
  if (output) {
    return output;
  }
  return '';
}

generateTypesFromSchema().then((types) => {
  console.log(types);
});
