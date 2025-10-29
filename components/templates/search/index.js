import React from 'react';
import Card from '@/components/modules/Card/Card';

function Result({ searchResult = [] }) {
  const hotItems = searchResult
    .filter((item) => item.type === 'hot')
    .slice(0, 3);
  const coldItems = searchResult
    .filter((item) => item.type === 'cold')
    .slice(0, 3);

  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="row">
          {/* --- Hot Coffee --- */}
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>

            {hotItems.length > 0 ? (
              hotItems.map((item) => <Card key={item.id} {...item} />)
            ) : (
              <p className="text-muted">No hot coffee found ☕</p>
            )}
          </div>

          {/* --- Cold Coffee --- */}
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>

            {coldItems.length > 0 ? (
              coldItems.map((item) => <Card key={item.id} {...item} />)
            ) : (
              <p className="text-muted">No cold coffee found ❄️</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
