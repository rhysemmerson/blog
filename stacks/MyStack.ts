import { StackContext, RemixSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  // Create the Remix site
  const site = new RemixSite(stack, "Blog", {
    path: "web/",
    disablePlaceholder: true,
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url,
  });
}
