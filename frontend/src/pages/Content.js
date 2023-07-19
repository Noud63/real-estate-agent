import React from 'react'
import '../sassStyles/pages/content.scss'
import SoldProperties from '../components/SoldProperties'
import image from '../assets/images/c2bw.jpg'
import image2 from '../assets/images/c4bw.jpg'
import { Link } from 'react-router-dom'


const Content = () => {

return (
        <>
        <div className="content_block1">
            <div className="content_block1_featuring">Featured Properties:</div>
                <div className="content_block1_wrapper">
                
                <div className="content_block1_wrapper_imgLeft">
                    
                        <img src={image} alt="" style={{ width: '100%', height: 'auto', opacity: '.7'}} />
                        <div className="name">
                            <span>Château de Chenonceau</span>
                        </div>
                     </div>

                     <div className="content_block1_wrapper_imgRight">
                        <img src={image2} alt="" style={{ width: '100%', height: 'auto', opacity: '.7' }} />
                        <div className="name">
                            <span>Château d'azay le Rideau</span>
                        </div>
                     </div>

                </div>

                   <Link to='/allproperties' style={{textDecoration: 'none'}}><div className="viewAllProps">View our Properties</div></Link>
               
            </div>

           <SoldProperties />

            <div className="content_block3">
                <div className="content_block3_wrapper">
                    <div className="finance"><span>$</span>FINANCE</div>
                    <div className="elliesTeam">
                    Ellie's dedicated team covers all areas of financial advice, helping clients to make decisions based on market insights.<br /><br />
                    Our services are conducted at local, national and international levels by specialists who have many years of experience in their respective fields.<br /><br />
                    Working on behalf of clients, we hold close relationships with lenders to make financial processes run smoothly and cost-effectively.
                    </div>
                     <Link to='/financeservice' style={{ textDecoration: 'none' }}><div className="financialService">Service</div></Link>
                </div>
            </div>

            <div className="content_block4"></div>

            <div className="block5">
                <div className="block5_content">
                <div className="balancingAct">THE BALANCING ACT</div>
                <div className="balancingAct_text">
                    Buying a house can be a a balancing act between all parties involved.<br />
                    Ellie is here to help you as a home-buyer through this challenging time in your journey.
              </div>
                <Link to='/services' style={{ textDecoration: 'none' }}><div className="services">Services</div></Link>
                </div>
           
            </div>

            <div className="content_block2"></div>

            <div className="content_block7">
                <div className="wrapper">
                    <div className="wrapper_header">The Good Life</div>
                    <div className="wrapper_subHeader">- Living in the French Countryside -</div>
                    <div className="wrapper_text">
                        <div className="wrapper_text_columnLeft">
                             <p>
                                jshfas fkjhaf adhf sdf hsd fs dhfsd fhsd fsh dfk sdjhfsd lkfjs dhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshdfks djhfsdlkfjs dhf
                             jshfas fkj haf adh f sdfh sd fsdhfs dfhsd fsh dfksd jhfs<br/>  dlk fjsdhf jshfas fkjhafadhf sdfhsd fsdhfsdfhsd fshd fksdjhfsdl kfjsdhf
                             jsh fas fkjhaf adhf sdfhsd fsdh fsdfhsd fshdfks djh fsdlk fjsdhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshdfksd jhfsdl kfjsdhf
                             jshfas fkjhaf adhf s dfhsd fsdhf sdfhsd fs hdfks djhf sdlkf jsd hf jshfas fkjhaf adhf sdfhsd fsdh fsdfhsd fshdfksdjh fsdl kfjsdhf<br/><br/>
                             jsh fas fkjhaf adhf sdfhsd fsdhfsdf hsd fshdfksdjhfs dlkfjsdhf jshfas<br/>  fkjhaf adhf sdfhsd fsdhfs dfhsd fshd fksdjhfsdlkfj sdhf
                             jshfas fk jhaf adhf sdfhsd fs dhfs dfhsd fshdfk sdjhfsdlkf jsdhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshdfk sdjhf sdlkfjsdhf
                              jshfas fkj haf adh<br/>   sdfh sd fsdhfs dfhsd fsh dfksd jhfs dlk fjsdhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshd fksdjhfsdl kfjsdhf
                             jsh fas fkjhaf adhf sdfhsd fsdh fsdfhsd fshdfks djh fsdlk fjsdhf jshfas fkj haf adhf sdfhsd fsd hfsd fhsd fshdfksd jhfsdl kfj sdhf
                             fsdh fsdfhsd fshdfksdjh fsdl
                             </p>
                        </div>
                        <div className="wrapper_text_columnRight">
                             jshfas fkjhaf adhf sdf hsd fs dhfsd fhsd fsh dfk sdjhfsd lkfjs dhf jsh fas fkjhaf adhf sdfhsd fsdhf sdfhsd fshdfks djhfsdlkfjs dhf
                             jshfas fkj haf adh sdfh sd fsdhfs dfhsd fsh dfksd jhfs<br/>  dlk fjsdhf jshfas fkjhaf adhf sdfhsd fsdhf sdfhsd fshd fksdjhfsdl kfjsdhf
                             jsh fas fkjhaf adhf sdfhsd fsdh fsdfhsd fshdfks djh fsdlk fjsdhf jshfas fkjhaf adhf sdfhsd fsd hfsdf hsd fshdfksd jhfsdl kfjsdhf
                             jshfas fkjhaf adhf s dfhsd fsdhf sdfhsd fs hdfks djhf sdlkf jsd hf jshfas fkjhaf adhf sdfhsd fsdh fsdfhsd fshdfksdjh fsdl kfjsdhf
                             jsh fas fkjhaf adhf sdfhsd fsdhfsdf hsd fshdfksdjhfs dlkfjsdhf jshfas fkjhaf adhf sdfhsd fsdhfs dfhsd fshd fksd jhfsdl kfj sdhf<br/><br/>
                             jshfas fk jhaf adhf sdfhsd fs dhfs dfhsd fshdfk sdjhf sdlkf jsdhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshdfk sdjhf sdlkf jsdhf
                             jshfas fk jhaf adhf sdfhsd fs dhfs dfhsd fshdfk sdjhf sdlkf jsdhf jshfas fkjhaf adhf sdfhsd fsdhfsdfhsd fshdfk sdjhf sdlkf jsdhf
                             
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="content_block2"></div>
            {/* <div className="content_block6"></div> */}
        </>
    )
}

export default Content