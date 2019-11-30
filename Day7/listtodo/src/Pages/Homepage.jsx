import React, {Component} from 'react';
import {
    Table,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class Homepage extends Component {
    state = { 
        listData : [],
        isOpen:false,
        indexEdit:-1
     }

    //Dibaca kedua
     componentDidMount(){
         this.setState({
             listData:[
                 {kegiatan:'Lari', status:true,tanggal:'2019-11-27'},
                 {kegiatan:'Sarapan', status:false,tanggal:'2019-11-28'},
             ]
         })
     }

    onAddDataClick = ()=>{
        var kegiatan=this.refs.kegiatan.value
        var tanggal =this.refs.tanggal.value

        var obj={
            kegiatan,
            status:false,
            tanggal
        }

        if(kegiatan===''||tanggal===''){
            MySwal.fire(
                'Warning !!!',
                'Please input your addlist',
                'error'
            )
        }else{
            var newListData=[...this.state.listData,obj]
            this.setState({listData:newListData,isOpen:false})
        }
    }

    onSaveDataClick = (index)=>{
        var newKegiatan = this.refs.kegiatan.value
        var newDate     = this.refs.tanggal.value
        var newStatus   = this.refs.status.value === "Sudah" ? true : false
        //console.log(newKegiatan,newStatus,newDate)

        var newData    = this.state.listData
        
        var objNewData = {
                kegiatan:newKegiatan,
                status:newStatus,
                tanggal:newDate
            }
            newData.splice(index,1,objNewData)
            this.setState({listData:newData,indexEdit:-1})
            this.showTodo(newData)
            console.log(newData)
    }

    onCancelEditClick=()=>{
        this.setState({indexEdit:-1})
        // this.showTodo()
    }

    onEditDataClick = (editIndex) =>{
        this.setState({indexEdit:editIndex}) 
        //console.log(editIndex)
        this.showTodo()
    }

    onDeleteDataClick=(index)=>{
        MySwal.fire({
            title: 'Apakah anda yakin?',
            text: "Anda tidak dapat mengembalikan file kembali!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.value) {
                var data = this.state.listData
                data.splice(index,1)
                this.setState({
                    data:data
                })
                MySwal.fire(
                'Hapus!',
                'File anda sudah dihapus.',
                'success'
              )
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              MySwal.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
    }

    showTodo=()=>{
            return this.state.listData.map((val,index)=>{
                if(index===this.state.indexEdit){
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td><input type="text" defaultValue={val.kegiatan} ref="kegiatan"/></td>
                        <td>
                            {val.status?(
                            <select ref="status">
                                <option selected>Sudah</option>
                                <option >Belum</option>
                            </select>
                            ) : (
                            <select ref="status">
                                <option>Sudah</option>
                                <option selected>Belum</option>
                            </select>
                            )}
                        </td>
                        <td>
                            <input type="date" ref="tanggal" defaultValue={val.tanggal}/>
                        </td>
                        <td>
                            <button onClick={()=>this.onSaveDataClick(index)} className="btn btn-primary mr-4">Save</button>
                            <button onClick={()=>this.onCancelEditClick()} className="btn btn-danger mr-4">Cancel</button>
                        </td>
                    </tr>
                )
            
        }else{
                return (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{val.kegiatan}</td>
                        <td>{val.status?'Sudah' : 'Belum'}</td>
                        <td>{val.tanggal}</td>
                        <td>
                            <button onClick={()=>this.onEditDataClick(index)} className="btn btn-primary mr-4" value='Edit'>Edit</button>
                            <button onClick={()=>this.onDeleteDataClick(index)} className="btn btn-danger mr-4">Delete</button>
                        </td>
                    </tr>
                )
        }
    })
    }

    //yang dibaca pertama
    render() { 
        return ( 
            <div>
                {/* start modal buat add data */}
                <Modal isOpen={this.state.isOpen} toggle={()=>this.setState({isOpen:false})}>
                    <ModalHeader>
                        Add To Do
                    </ModalHeader>
                    <ModalBody>
                         <input className='form-control' placeholder="kegiatan..." type="text" ref="kegiatan"></input>
                         <input className='form-control' placeholder="kegiatan..." type="date" ref="tanggal"></input>
                    </ModalBody>
                    <ModalFooter>
                        <button onClick={this.onAddDataClick} className="btn btn-success">A D D</button>
                        <button className="btn btn-danger" onClick={()=>this.setState({isOpen:false})}>C A N C E L</button>
                    </ModalFooter>
                </Modal>
                {/* End modal buat add data */}
                <div className="p-5 mx-5 my-5">
                    <Table>
                        <thead>
                            <tr>
                                <th>No. </th>
                                <th>Kegiatan</th>
                                <th>Status</th>
                                <th>Tanggal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showTodo()}
                        </tbody>
                    </Table>
                    <div>
                        <button onClick={()=>this.setState({isOpen:true})} className='btn btn-success rounded-pill'>Add Data</button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Homepage;