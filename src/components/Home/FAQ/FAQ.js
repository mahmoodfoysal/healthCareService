import React from 'react';
import faq from '../../../images/faq.png';

const FAQ = () => {
    return (
        <div className='container'>
            <h1 className='text-center mb-5 mt-5'>FAQ</h1>
            <br />
            <div className='row'>
                <div className='col-md-6'>
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <strong>What is good health?</strong>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam unde corrupti tempora, expedita cum quas quae veritatis itaque beatae? Suscipit quam esse expedita? Est consequuntur aliquam, temporibus unde iure hic veniam neque voluptatum reiciendis voluptas cupiditate adipisci, dolor vero, cum tempore tenetur? Quaerat distinctio voluptatibus eligendi facere doloremque, deleniti assumenda dignissimos neque reprehenderit fuga quis soluta quas enim vero deserunt consectetur quasi atque? Voluptatem aspernatur, non optio dolorum quidem aut.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Is a good pressure?</strong>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptas incidunt fugiat officia, dolores delectus nemo est, officiis libero voluptates, sint a quia. Vel, molestiae ad optio ut, doloribus atque minima nisi praesentium odit iste magnam quas eius neque rem eum obcaecati porro vitae, enim est debitis suscipit? Corrupti voluptatibus sint dolor, quibu</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Does Require Medication?</strong>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi rerum, tenetur, quidem harum, repudiandae commodi ad suscipit laboriosam dolor ullam error! Quod, nemo vitae debitis soluta praesentium aut facere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img style={{width:"100%"}} src={faq} alt="faq image"/>
                </div>
            </div>
        </div>
    );
};

export default FAQ;