import { StackContext, RemixSite } from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
  // Create the Remix site
  console.log(app.stage);
  const site = new RemixSite(stack, "Blog", {
    path: "web/",
    disablePlaceholder: true,
    customDomain: app.stage === "production" ? {
      domainName: "rhysdevs.com",
      domainAlias: "www.rhysdevs.com",
    } : undefined,
  });

  // Add the site's URL to stack output
  stack.addOutputs({
    URL: site.url,
  });
}
