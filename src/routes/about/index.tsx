import { Container } from '@mantine/core';
import React, { useEffect } from 'react';
import { Client } from '@notionhq/client';
import '@9gustin/react-notion-render/dist/index.css';
import { NotionBlock, Render } from '@9gustin/react-notion-render';

const NotionApiToken = import.meta.env.VITE_NOTION_API_TOKEN;
const NotionReverseProxyBaseUrl = import.meta.env
  .VITE_NOTION_REVERSE_PROXY_BASE_URL;

const notion = new Client({
  auth: NotionApiToken,
  baseUrl: NotionReverseProxyBaseUrl,
});

const Index = () => {
  const [resumeBlocks, setResumeBlocks] = React.useState<NotionBlock[]>([]);

  useEffect(() => {
    console.log(NotionReverseProxyBaseUrl);
    const pageId = '0705e695cc594e0282c2c95474140f57';
    notion.blocks.children
      .list({ block_id: pageId })
      .then(blocks => setResumeBlocks(blocks.results as NotionBlock[]))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container>
      <Render blocks={resumeBlocks} useStyles />
    </Container>
  );
};

export default Index;
