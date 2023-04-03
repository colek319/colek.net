import { AppShell, MantineProvider } from '@mantine/core';
import HeaderWithLinks from './headerWithLinks';
import React from 'react';

const Layout = (props: React.PropsWithChildren) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell
        padding="xl"
        header={HeaderWithLinks({
          links: [
            { link: '/', label: 'Home' },
            { link: '/about', label: 'About' },
          ],
        })}
        styles={theme => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}>
        {props.children}
      </AppShell>
      );
    </MantineProvider>
  );
};

export default Layout;
