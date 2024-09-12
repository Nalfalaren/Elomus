import React from 'react';

export type TypeTag = 'default' | 'success' | 'error' | 'warning';

export type TagProps = {
  label: string;
  type?: TypeTag;
};

const Tag: React.FC<TagProps> = ({ label = 'default', type }: TagProps) => {
  const handleClassName = () => {
    let tagClassName = 'tag';
    if (type !== 'default') {
      tagClassName += ` tag--${type}`;
    }
    return tagClassName;
  };

  return <span className={handleClassName()}>{label}</span>;
};

export default Tag;
