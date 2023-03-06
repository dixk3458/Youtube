import React from 'react';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  return <div>{keyword ? `${keyword}` : '🔥 트렌드'}</div>;
}
