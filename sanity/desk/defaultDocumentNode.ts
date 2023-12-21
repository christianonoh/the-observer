import { DefaultDocumentNodeResolver } from "sanity/desk";
import { Iframe } from "sanity-plugin-iframe-pane";

const defaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: `/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default defaultDocumentNode;
