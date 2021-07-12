function Catagory(props){
    const {item,_id}=props.data
  

    return(<div style={{height:"200px",width:"200px",background:"#ddd"}} className={(props.activeMenu===_id?"activeMenu":"")} id={_id} onClick={()=>{
        props.fn(_id)
    }}>
        <h1>{item}</h1>
    </div>)

}

export default Catagory;