import React from 'react';
import { PageHeader, Tabs, Typography } from 'antd';
import GridContent from './GridContent';
import styles from './index.less';

const { Title } = Typography;



const ContentHeader = ({
  children,
  contentWidth,
  top,
  title,
  content,
  logo,
  extraContent,
  ...restProps
}) => {
  return (
    <div style={{ margin: '-24px -24px 0' }} className={styles.main}>
      {top}
      <div>
        <PageHeader
          wide={contentWidth === 'Fixed'}
          title={
            <Title
              level={4}
              style={{
                marginBottom: 0,
              }}
            >
              {title}
            </Title>
          }
          key="pageheader"
          {...restProps}

          className={styles.pageHeader}
        >
          <div className={styles.detail}>
            {logo && <div className={styles.logo}>{logo}</div>}
            <div className={styles.main}>
              <div className={styles.row}>
                {content && <div className={styles.content}>{content}</div>}
                {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
              </div>
            </div>
          </div>
        </PageHeader>
      </div>
      {children ? (
        <div className={styles['children-content']}>
          <GridContent>{children}</GridContent>
        </div>
      ) : null}
    </div>
  );
};

export default ContentHeader;
