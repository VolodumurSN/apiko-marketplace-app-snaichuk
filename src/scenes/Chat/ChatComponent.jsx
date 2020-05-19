import React from 'react';
import { Route } from 'react-router-dom';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { routes } from '../../routes/BaseRoutes';
import s from './Chat.module.scss';
import ChatItem from '../../components/ChatComponents/ChatItem';
import ChatDetails from '../ChatDetails';
import Spinner from '../../components/Spinners/Spinner';

const Chat = ({ chatsArr, isLoading }) => {
  if (isLoading) {
    return <Spinner />;
  }

  const Row = ({ index, style }) => {
    if (!chatsArr[index]) {
      return;
    }

    return (
      <div key={chatsArr[index]?.id} style={style}>
        <ChatItem {...chatsArr[index]} />
      </div>
    );
  };

  return (
    <div className={s.chat}>
      <aside className={s.aside}>
        <AutoSizer>
          {({ height, width }) => (
            <InfiniteLoader
              isItemLoaded={(index) => index < chatsArr.length}
              itemCount={chatsArr.length}
              loadMoreItems={async () => await chatsArr}
            >
              {({ onItemsRendered, ref }) => (
                <List
                  width={width}
                  height={height}
                  itemCount={chatsArr.length}
                  itemSize={107}
                  className="list-container"
                  onItemsRendered={onItemsRendered}
                  ref={ref}
                >
                  {Row}
                </List>
              )}
            </InfiniteLoader>
          )}
        </AutoSizer>
      </aside>

      <div className={s.chatDetails}>
        <Route path={routes.CHAT} exact>
          <ChatDetails />
        </Route>
      </div>
    </div>
  );
};

export default Chat;
