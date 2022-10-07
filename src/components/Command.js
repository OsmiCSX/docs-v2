import React from "react";
import CodeBlock from "@theme/CodeBlock";

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

export const InstallOsmicsx = () => {
  return (
    <Tabs groupId="package-manager">
      <TabItem value="NPM">
        <CodeBlock className="language-shell" language="shell">
          npm install osmicsx
        </CodeBlock>
      </TabItem>
      <TabItem value="Yarn">
        <CodeBlock className="language-shell" language="shell">
          yarn add osmicsx
        </CodeBlock>
      </TabItem>
    </Tabs>
  );
};
