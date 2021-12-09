import React from "react"

const data = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ];

function MapUsers() {

    const sidebar = ( 
        <ul>
            {data.map((data) =>
              <li key={data.id}>          
              {data.title}
              </li>
            )}
          </ul>
        );
        const content = data.map((post) =>    
        <div key={post.id}>      
        <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        );
        return (
          <div>
            {sidebar}      <hr />
            {content}    
          </div>
        );
    
}

export default MapUsers
