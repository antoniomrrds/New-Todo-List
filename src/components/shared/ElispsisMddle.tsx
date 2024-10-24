import {Typography }from 'antd';

const { Text } = Typography;

export const EllipsisMiddle: React.FC<{ suffixCount: number; children: string }> = ({
    suffixCount,
    children,
  }) => {
    if (children.length <= suffixCount) {
      return <Text>{children}</Text>;
    }
  
    const start = children.slice(0, children.length - suffixCount);
    const suffix = children.slice(-suffixCount).trim();
    return (
      <Text ellipsis={{ tooltip: children }} style={{ maxWidth: '30%' }}>
        {start}<span >...</span>{suffix}
      </Text>
    );
  };
  
  