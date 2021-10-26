import { useEffect, useState } from "react"
import { Button, Modal, Spinner } from "react-bootstrap";
import { ICreateInvit } from "../../configuration/api/dto/ICreateInvit";
import { ICreateTeam } from "../../configuration/api/dto/ICreateTeam";
import { IMember } from "../../configuration/api/dto/IMember";
import { invitApi } from "../../configuration/api/invit/invit.api";
import { teamApi } from "../../configuration/api/team/team.api";
import { ToastContainer, toast } from 'react-toastify';


function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Ajouter une équipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

            <form>
                <div style={{"display":"flex", "justifyContent": "center"}}>
                <div className="form-group">
                    <label>Nom d'équipe</label>
                    <input type="text" className="form-control" onChange={ (ev:any) => {
                        props.changeTeam(ev.target.value)
                    }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""/>
                </div>
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-primary" type="button" onClick={props.onAdd} disabled={props.isLoading}>
              <>
              {
                  props.isLoading && <span className="spinner-border spinner-border-sm" style={{marginRight: "0.5em"}} role="status" aria-hidden="true"></span> 
              }
              <span className="sr-only">Ajouter</span>
              </>

            </button>
        </Modal.Footer>
      </Modal>
    );
  }

  function MyDeleteVerticallyCenteredModal(props: any) {

    const confirmDelete = async () => {
        
        console.log(props.onHide(true));
        console.log("click")
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">

          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
              {
                  props.invited !== null &&  <h4 className="text-center">Etes-vous sûr de vouloir supprimer {props.invited.forUser} ?</h4>
              }
        </Modal.Body>
        <Modal.Footer>
            <button className=" btn btn-md btn-success" onClick={confirmDelete}>Confirmer</button>
            <button className=" btn btn-md btn-danger">Refuser</button>

          {/* <button className="btn btn-primary" type="button" onClick={props.onAdd} disabled={props.isLoading}>
              <>
              {
                  props.isLoading && <span className="spinner-border spinner-border-sm" style={{marginRight: "0.5em"}} role="status" aria-hidden="true"></span> 
              }
              <span className="sr-only">Ajouter</span>
              </>

            </button> */}
        </Modal.Footer>
      </Modal>
    );
  }

  

export const Team = () => {
    const [createTeamName, setCreateTeamName] = useState<string>("");

    const [team, setTeam] = useState<any>();
    const [modalShow, setModalShow] = useState(false);
    const [modalDeleteShow, setModalDeleteShow] = useState(false);
    const [deleteUserTarget, setDeleteUserTarget] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState<boolean>(false);
    const [sendEmail, setSendEmail] = useState<any>("");
    const [radioValue, setRadioValue] = useState<string>("");

    const getMyTeam = async () => {
        try {
            const myTeam = await teamApi.getMyTeam(localStorage.getItem("linge_id_token") as string);

            if ( myTeam.status !== 200 ) {
                setTeam(null)
            } else {
                const data = await myTeam.json();
                setTeam(data);
            }
        } catch (e) {
            console.log(e);
            alert("Une erreur est survenue")
        }

    }

    const radioChangeDay = (ev:any) => {
        //@ts-ignore
        setRadioValue("daily");
    } 

    const constRadioChangeWeek = (ev:any) => {
        //@ts-ignore
        setRadioValue("weekly")
    }

    const sendInvit = async (ev:any) => {
        const payload:ICreateInvit = {
            teamId: team.id,
            createdBy: team.owner as string,
            forUser:sendEmail
        };
        try {
            const resp = await invitApi.add(localStorage.getItem("linge_id_token") as string, payload);
            if ( resp.status === 200 ) {
                toast("Email envoyé avec succès !")
                setSendEmail("")
            } else if ( resp.status === 204 ) {    
                toast("Déjà une invitation en attente ...")
            } else {
                toast("Oups, une erreur est survenue !")
            }
        } catch ( e ) {
            toast("Oups, une erreur est survenue !")
        }

    }

    const deleteUser = (ev:any, member:any) => {
        setDeleteUserTarget(member);
        setModalDeleteShow(true);
    }

    const convertTimestampToDate = (timestamp:any) => {
        return new Date(timestamp).toISOString()
    }

    function isEmail(email:string): boolean {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    const changeEmail = async (ev:any) => {
        setSendEmail(ev.target.value)

        if ( team.members.length < parseInt(team.maxSlot) ) {
            setIsSend(isEmail(ev.target.value));
        }
    }
    
    const onAddTeam = async () => {
        let idToken:string = localStorage.getItem("linge_id_token") as string;
        const payload:ICreateTeam = {
            name: createTeamName
        }

        try {
            setIsLoading(true);
            const resp = await teamApi.createTeam(payload, idToken);
            if ( resp.status === 200 ) {
                let json = await resp.json();
                setTeam(json);
                setTimeout( () => {
                    setModalShow(false)
                    setIsLoading(false);
                },1000)
            } else {
                alert("Une erreur est survenue");
                setModalShow(false)
                setIsLoading(false);
            }
        } catch ( e ) {
            alert("Une erreur est survenue");
            setModalShow(false)
            setIsLoading(false);
        }


    }

    useEffect( () => {
        getMyTeam()
    },[]);

    return <div className="container mt-5">
        {
            (team === null) && <div>
                
                <div className="alert alert-danger text-center" role="alert">
                    Vous n'avez pas d'équipe.<br/> <button className="btn btn-primary mt-4" onClick={() => setModalShow(true)}> Ajouter une équipe</button>
                </div>

                <MyVerticallyCenteredModal
                    show={modalShow}
                    changeTeam={setCreateTeamName}
                    onAdd={() => onAddTeam()}
                    onHide={() => setModalShow(false)}
                    setIsLoading={setIsLoading}
                    isLoading={isLoading}
                />
            </div>
        }

    

        {
            team && team !== null  && 
            <div>


            <div style={{"display":"flex", "justifyContent": "center"}}>
            <ToastContainer/>
            <div className="text-center">
                <h4 className="mb-3">Invité quelqu'un</h4>
                <div className="form-group">
                <input type="email" placeholder="foo@gmail.com" className="form-control text-center p-2" style={{"fontSize":"1.2em"}} onChange={ ev => {
                    changeEmail(ev)
                }}></input>
                <button className="btn btn-primary mt-4" disabled={!isSend} onClick={sendInvit}>Envoyer</button>
                </div>
            </div>
            </div>
    
            <div className="mt-5">
                <h4 className="">Membres - {team.name}</h4>

                {
                    team && team !== null && (team["members"] === null || team["members"].length <= 0) && 
                    <>
                    <div>

                    <div>
                        <h4>{team.name}</h4>
                        <small className="form-text text-muted">
                            Membres : 0 / {team.maxSlot}
                        </small>
                    </div>
                    

                    </div>


                                <div className=" text-center alert alert-danger" role="alert">
                                    Vous êtes seul pour le moment 
                                </div>

                    </>
                }

                {
                    team && team !== null && team["members"].length > 0 && <div className="shadow  p-4">
                        <MyDeleteVerticallyCenteredModal
                            show={modalDeleteShow}
                            onHide={() => setModalDeleteShow(false)}
                            invited={deleteUserTarget}

                        />

                        <h6>
                            Fondateur : {team.owner}
                        </h6>
                        <small className="form-text text-muted">
                            Membres : {team.members.length} / {team.maxSlot}
                        </small>

                        <div className="mt-4">
                            <h6 className="">Fréqueunce des notifications</h6>
                            <div>

                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked={team.notifFreq === "daily"} onChange={radioChangeDay}/>
                                <label className="form-check-label">
                                    Jour
                                </label>
                                </div>
                                <div className="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked={team.notifFreq === "weekly"} onChange={constRadioChangeWeek}/>
                                <label className="form-check-label">
                                    Semaine
                                </label>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 mt-2 rounded">
                            <div style={{"display":"flex", "flexFlow":"wrap"}}>
                                {
                                    team.members.map( (member:IMember) => {
                                        return <>
                                            <div className="shadow p-3 rounded" style={{marginLeft: "1em"}}>
                                                <div>{member.forUser}<button className="btn btn-sm btn-danger" style={{"borderRadius": "50%", "marginLeft": "0.3em"}} onClick={ (ev) => {
                                                    deleteUser(ev, member)
                                                }}>X</button></div>
                                            </div>                                         
                                        </>
                                    })
                                }
                            </div>   
                        </div>

                        </div>
                }
            </div>


            </div>
        }


    </div>
}