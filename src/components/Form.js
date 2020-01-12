import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Multiselect } from "multiselect-react-dropdown";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSubmit = e => {
    e.preventDefault();

    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message
    };
    console.log(data);
    /* this.getTitle = "";
    this.getMessage = ""; */
  };
  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            name="edi name bey"
            required
            type="text"
            ref={input => {
              this.getTitle = input;
            }}
            placeholder="Enter the post name"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getMessage = input)}
            cols="28"
            placeholder="Enter Post"
          />
          <br />
          <br />
          <button>Post</button>
        </form>
      </div>
    );
  }
}

// class Form extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//              username:"",
//              password:"",
//              dob:"",
//              cars:"",
//              flavor:[],
//              startDate:null,
//              day:"",
//              options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'sri', id: 3},{name: 'Srigasdfsr', id: 4}]
//         }
//         this.handleChange=this.handleChange.bind(this);
//         this.handleSubmit=this.handleSubmit.bind(this);
//         this.handleDate=this.handleDate.bind(this);
//         this.onSelect=this.onSelect.bind(this);
//         this.onRemove=this.onRemove.bind(this);
//     }

//     handleChange=(event) => {
//         const {name,value}=event.target
//         this.setState({
//             [name]:value,
//         },() => console.log(this.state.username,this.state.password,this.state.dob))
//     }

//     handleSubmit=(event) => {
//         event.preventDefault();
//         alert(`My name is ${this.state.username} and my fav flavor is ${this.state.flavor} and DOB ${this.state.dob}`)
//         this.setState({
//             username:"",
//             password:"",
//             dob:"",
//             cars:"",
//             flavor:"",
//         })
//     }

//     handleDate = date => {
//         console.log(date)
//       //  let arr=String(date).substr(0,15).replace(" ",",").split(",")
//      //   console.log(arr);
//         this.setState({
//           startDate: date
//         } ,()=> console.log(this.state.startDate,this.state.day));
//       };

//     onSelect = (optionsList, selectedItem) => {
//         //console.log(optionsList);
//         console.log(selectedItem);

//     }

//     onRemove = (optionList, removedItem) => {

//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" value={this.state.name} name="username" onChange={this.handleChange} placeholder="username"/>
//                     <input type="password" value={this.state.password} name="password" onChange={this.handleChange} placeholder="password"/>
//                     <input type="date" value={this.state.dob} name="dob" onChange={this.handleChange} placeholder="date of birth"/>
//                     {/* <label>
//                       Pick your favorite flavor:
//                         <select multiple={true} name="flavor" value={this.state.value} onChange={this.handleMultiple}>
//                             <option value="grapefruit">Grapefruit</option>
//                             <option value="lime">Lime</option>
//                             <option value="coconut">Coconut</option>
//                             <option value="mango">Mango</option>
//                         </select>
//                     </label>
//                     Exclude date
//                     min date
//                     max date
//                     selects end
//                     selects start
//                     startdate
//                     enddate
//                     */}
//                     <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.startDate} onChange={this.handleDate}
//                     showMonthDropdown
//                     showYearDropdown
//                     dropdownMode="select"
//                     placeholderText="Date Of Birth"/>
//                     <Multiselect
//                     options={this.state.options} // Options to display in the dropdown

//                     onSelect={this.onSelect} // Function will trigger on select event
//                     onRemove={this.onRemove} // Function will trigger on remove event
//                     displayValue="name" // Property name to display in the dropdown options
//                     />

//                     <button >submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default Form
