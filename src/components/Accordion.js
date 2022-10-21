import React from 'react'; 

const Accordion = ({ items }) => {

  const renderedItems = items.map(item => {
    return <div>
      <div className="title active">
        <i className="dropdown icon"></i>
        {item.title}
      </div>
      <div className='conten active'>
        <p>{item.content}</p>
      </div>
    </div>
  });



  return <div className="ui styled accordion">
    {renderedItems}
  </div>
};

export default Accordion; 