import React, {Component} from 'react';
// ON HOLD BECAUSE OF HURRICANE FLORENCE
export class RFPages extends Component {
  createDiv(options){
    const {className, backgroundColor, content, ratio, align, scroll} = options;
    const height = ratio[0];
    const width = ratio[1];
    const alignItems = align[0];
    const justifyContent = align[1];
      return (<div className={className ? className : ''} style={{
        display: 'flex',
        height,
        width,
        backgroundColor,
        justifyContent,
        alignItems,
        overflowY: scroll ? 'auto' : 'hidden',
        overflowX: 'hidden'
      }}>{content}</div>
    );
  }

  createPage(options){

    return (
      <div className={options.className} style={{  display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minWidth: 300, position: 'absolute'}}>
        {options.header && <header style={{display: 'flex', height: options.header.height || 'auto', justifyContent: options.header.align[0] || '', alignItems: options.header.align[1] || ''}}>{options.header.title}</header>}
        <div style={{overflowY: options.scroll ? 'auto' : '', height: '100%', width: '100%'}}>
          {options.body}
        </div>
        {options.footer && <footer style={{height: options.footer.height, display: 'flex', justifyContent: options.footer.align[0] || '', alignItems: options.footer.align[1] || ''}}>{options.footer.title}</footer>}
      </div>
    );
  }
 
}