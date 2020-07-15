import React from 'react'
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import RemoveModal from '../modals/RemoveModal'
import {logoutAll1} from '../../../store/actions/auth/auth-actions'
import { useToasts } from "react-toast-notifications";
import { ToastMsg } from '../Style'
import logout2 from '../../../assets/pics/footer/log-out.svg'
const Logout = (props) => {
    const { addToast } = useToasts();
    const dispatch = useDispatch();
    const logout = (x) => {
        dispatch(logoutAll1()).then(data => {
            if(!data.error){
                addToast(<ToastMsg>התנתקת בהצלחה!!</ToastMsg>, { appearance: "success", autoDismiss: true });
                localStorage.removeItem("node");
                props.history.push('/login');
              }
              else{
                addToast(<ToastMsg>{data.error}</ToastMsg>, { appearance: "error", autoDismiss: true });
              }
        })
    }
    return(<div style={{cursor:"pointer"}}>
        <RemoveModal button={<img alt="logout2" src={logout2} width="25" />} 
                msg={"האם אתה בטוח שברצונך להתנתק?"} func={logout} title={"התנתקות"} 
                id={5}/>
    </div>)
}
export default withRouter(Logout)


