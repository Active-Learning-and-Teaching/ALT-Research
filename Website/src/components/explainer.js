import React, { useEffect } from "react";


 function NewComponent() {
      return (
        <div>
          <title>explainerdashboard</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
          <div className="container">
            <div><h1>ALT Explainer</h1></div><ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="Feature Importances-tab" data-toggle="tab" href="#Feature Importances" role="tab" aria-controls="Feature Importances" aria-selected="true">Feature Importances</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="Regression Stats-tab" data-toggle="tab" href="#Regression Stats" role="tab" aria-controls="Regression Stats" aria-selected="false">Regression Stats</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="Individual Predictions-tab" data-toggle="tab" href="#Individual Predictions" role="tab" aria-controls="Individual Predictions" aria-selected="false">Individual Predictions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="What if...-tab" data-toggle="tab" href="#What if..." role="tab" aria-controls="What if..." aria-selected="false">What if...</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="Feature Dependence-tab" data-toggle="tab" href="#Feature Dependence" role="tab" aria-controls="Feature Dependence" aria-selected="false">Feature Dependence</a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active" id="Feature Importances" role="tabpanel" aria-labelledby="Feature Importances-tab">
                <div><h1>Feature Importances</h1></div>
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Feature Importances</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="732001c7-fa6f-445a-8e6a-465f3dc32526" className="plotly-graph-div" style={{height: '300px', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div />
                    </div>
                  </div>
                </div> 
              </div>
              <div className="tab-pane" id="Regression Stats" role="tabpanel" aria-labelledby="Regression Stats-tab">
                <div />
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Model Summary</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">metric</th>
                                      <th scope="col">Score</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>mean-squared-error</td>
                                      <td>0.296</td>
                                    </tr>
                                    <tr>
                                      <td>root-mean-squared-error</td>
                                      <td>0.544</td>
                                    </tr>
                                    <tr>
                                      <td>mean-absolute-error</td>
                                      <td>0.457</td>
                                    </tr>
                                    <tr>
                                      <td>mean-absolute-percentage-error</td>
                                      <td>0.255</td>
                                    </tr>
                                    <tr>
                                      <td>R-squared</td>
                                      <td>0.241</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Predicted vs Actual</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="4fffac44-484a-4a89-92e0-8c04439f0f6a" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Residuals</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="1efed03d-0979-413f-a57a-866aa5e13f25" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Plot vs feature</h3><h6 className="card-subtitle">Are predictions and residuals correlated with features?</h6></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="c121b70a-b22d-45d0-9ae2-bb7750931f4b" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="tab-pane" id="Individual Predictions" role="tabpanel" aria-labelledby="Individual Predictions-tab">
                <div><h1>Individual Predictions</h1></div>
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Select Index</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                Selected index: <b>40</b>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Prediction</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col" />
                                      <th scope="col">Target</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Predicted</td>
                                      <td>2.180 </td>
                                    </tr>
                                    <tr>
                                      <td>Observed</td>
                                      <td>2.000 </td>
                                    </tr>
                                    <tr>
                                      <td>Residual</td>
                                      <td>-0.180 </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Contributions Plot</h3><h6 className="card-subtitle">How has each feature contributed to the prediction?</h6></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="0062643c-181e-4676-b125-1d3cf683b59b" className="plotly-graph-div" style={{height: '600px', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Partial Dependence Plot</h3></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="e7de1f50-6c5b-4962-a414-7d6e639ea017" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Contributions Table</h3><h6 className="card-subtitle">How has each feature contributed to the prediction?</h6></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th scope="col">Reason</th>
                                      <th scope="col">Effect</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>Average of population</td>
                                      <td>2.34 </td>
                                    </tr>
                                    <tr>
                                      <td>correct_quizzes = 1.0</td>
                                      <td>-0.21 </td>
                                    </tr>
                                    <tr>
                                      <td>responseTime = 60000.0</td>
                                      <td>+0.09 </td>
                                    </tr>
                                    <tr>
                                      <td>not_attempted_quizzes = 2.0</td>
                                      <td>-0.08 </td>
                                    </tr>
                                    <tr>
                                      <td>attempted_quizzes = 1.0</td>
                                      <td>+0.04 </td>
                                    </tr>
                                    <tr>
                                      <td>feedbacks_attended = 2.0</td>
                                      <td>+0.0 </td>
                                    </tr>
                                    <tr>
                                      <td>Other features combined</td>
                                      <td>+0.0 </td>
                                    </tr>
                                    <tr>
                                      <td>Final prediction</td>
                                      <td>2.18 </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
              <div className="tab-pane" id="What if..." role="tabpanel" aria-labelledby="What if...-tab">
                <div><div><h1>What if...</h1></div>
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-sm">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Select Index</h3></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  Selected index: <b>9</b>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Prediction</h3></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th scope="col" />
                                        <th scope="col">Target</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Predicted</td>
                                        <td>2.423 </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-sm">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Feature Input</h3><h6 className="card-subtitle">Adjust the feature values to change the prediction</h6></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  <div />
                                  <div className="row" style={{marginTop: '20px'}}>
                                    <div className="col-sm">
                                      <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label htmlFor="correct_quizzes">correct_quizzes</label>
                                        <input id="correct_quizzes" type="text" defaultValue={2} name="correct_quizzes" disabled />
                                      </div>
                                      <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label htmlFor="feedbacks_attended">feedbacks_attended</label>
                                        <input id="feedbacks_attended" type="text" defaultValue={2} name="feedbacks_attended" disabled />
                                      </div>
                                    </div>
                                    <div className="col-sm">
                                      <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label htmlFor="responseTime">responseTime</label>
                                        <input id="responseTime" type="text" defaultValue={85000} name="responseTime" disabled />
                                      </div>
                                    </div>
                                    <div className="col-sm">
                                      <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label htmlFor="not_attempted_quizzes">not_attempted_quizzes</label>
                                        <input id="not_attempted_quizzes" type="text" defaultValue={1} name="not_attempted_quizzes" disabled />
                                      </div>
                                    </div>
                                    <div className="col-sm">
                                      <div style={{display: 'flex', flexDirection: 'column'}}>
                                        <label htmlFor="attempted_quizzes">attempted_quizzes</label>
                                        <input id="attempted_quizzes" type="text" defaultValue={2} name="attempted_quizzes" disabled />
                                      </div>
                                    </div>
                                  </div> 
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-sm">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Contributions Plot</h3><h6 className="card-subtitle">How has each feature contributed to the prediction?</h6></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  <div>                        
                                    <div id="03b6d32d-b5a0-438e-b048-b1ef565ef7a5" className="plotly-graph-div" style={{height: '600px', width: '100%'}} />                  </div>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Partial Dependence Plot</h3></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  <div>                        
                                    <div id="9e1a41bf-edfd-433d-9f96-c37e85df8569" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div className="row" style={{marginTop: '20px'}}>
                    <div className="col-sm">
                      <div className="card-deck">
                        <div className="card">
                          <div className="card-header"><h3 className="card-title">Contributions Table</h3><h6 className="card-subtitle">How has each feature contributed to the prediction?</h6></div>
                          <div className="card-body">
                            <div className="w-100">
                              <div className="row" style={{marginTop: '20px'}}>
                                <div className="col-sm">
                                  <table className="table">
                                    <thead>
                                      <tr>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Effect</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td>Average of population</td>
                                        <td>2.34 </td>
                                      </tr>
                                      <tr>
                                        <td>correct_quizzes = 2</td>
                                        <td>+0.02 </td>
                                      </tr>
                                      <tr>
                                        <td>responseTime = 85000</td>
                                        <td>+0.08 </td>
                                      </tr>
                                      <tr>
                                        <td>not_attempted_quizzes = 1</td>
                                        <td>-0.01 </td>
                                      </tr>
                                      <tr>
                                        <td>attempted_quizzes = 2</td>
                                        <td>-0.0 </td>
                                      </tr>
                                      <tr>
                                        <td>feedbacks_attended = 2</td>
                                        <td>+0.0 </td>
                                      </tr>
                                      <tr>
                                        <td>Other features combined</td>
                                        <td>+0.0 </td>
                                      </tr>
                                      <tr>
                                        <td>Final prediction</td>
                                        <td>2.42 </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div> 
              </div>
              <div className="tab-pane" id="Feature Dependence" role="tabpanel" aria-labelledby="Feature Dependence-tab">
                <div><h1>Feature Dependence</h1></div>
                <div className="row" style={{marginTop: '20px'}}>
                  <div className="col-sm">
                    <div className="card-deck">
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Shap Summary</h3><h6 className="card-subtitle">Ordering features by shap value</h6></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="39686c42-0f47-4334-8011-4e75364e2377" className="plotly-graph-div" style={{height: '300px', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header"><h3 className="card-title">Shap Dependence</h3><h6 className="card-subtitle">Relationship between feature value and SHAP value</h6></div>
                        <div className="card-body">
                          <div className="w-100">
                            <div className="row" style={{marginTop: '20px'}}>
                              <div className="col-sm">
                                <div>                        
                                  <div id="2bf22e60-9eb3-4aad-805d-5382a791d1f7" className="plotly-graph-div" style={{height: '100%', width: '100%'}} />                  </div>
                              </div>
                            </div> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      );
    }


export default NewComponent;