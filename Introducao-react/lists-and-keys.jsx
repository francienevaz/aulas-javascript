import React from "react";

const listCustomer = [
  {
    id: 1,
    name: "Franciene Vaz",
    skills: ['React', 'JS', 'HTML', 'NodeJS', 'Git']
  },
  {
    id: 2,
    name: "John Cater",
    skills: ['Java', 'MySQL', 'Python']
  },
  {
    id: 3,
    name: "Joanne Jonnes",
    skills: ['Angular', 'JS', 'HTML', 'NodeJS', 'Git']
  },
  {
    id: 4,
    name: "Cathrina Bourchée",
    skills: ['Reason']
  },
  
]

const App = () => {

  const renderCustomers = (customer, index) => {
      return (
        <div key={`customer ${customer.id}`}>
          <li>{customer.name}</li>
          {customer.skills.map(renderSkills)}
        </div>
      )
  }

  const renderSkills = (skill, index) => {
      return (
        <div style={{paddingLeft: '30px'}}key={`skill ${index}`}>
          <li>{skill}</li>
        </div>
      )
  }

   return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>{listCustomer.map(renderCustomers)}</ul>        
      </div>
    </div>
  );
};
export default App;
