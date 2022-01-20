

import Link from "next/link";
const SideBar = (props) => {
    return (

        <div id="sidebar" className="app-sidebar">

            <div className="app-sidebar-content" data-scrollbar="true" data-height="100%">

                <div className="menu">
                    <div className="menu-profile">
                        <a href="/" className="menu-profile-link" data-toggle="app-sidebar-profile"
                            data-target="#appSidebarProfileMenu">
                            <div className="menu-profile-cover with-shadow"></div>                            
                            <div className="menu-profile-info">
                                <div className="d-flex align-items-center">
                                    <div className="flex-grow-1">
                                        Stephen
                                    </div>
                                    {/* <div className="menu-caret ms-auto"></div> */}
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="menu-header">Navigation</div>

                    <div className="menu-item">
                        <a href="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-th-large"></i>
                            </div>
                            <div className="menu-text">Dashboard </div>
                        </a>
                    </div>
                    <div className="menu-item has-sub">
                        <div href="/" className="menu-link">
                            <div className="menu-icon">
                                <i className="fa fa-hdd"></i>
                            </div>
                            <div className="menu-text">Set ups</div>
                            <div className="menu-caret"></div>
                        </div>
                        <div className="menu-submenu">
                        <div className="menu-item">
                                <a href="/employers" className="menu-link">
                                    <div className="menu-text">Employers</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/brokers" className="menu-link">
                                    <div className="menu-text">Brokers</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/agents" className="menu-link">
                                    <div className="menu-text">Agents</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/currencies" className="menu-link">
                                    <div className="menu-text">Currency</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/exchangerates" className="menu-link">
                                    <div className="menu-text">Exchange Rates</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/banks" className="menu-link">
                                    <div className="menu-text">Banks</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/bankbranches" className="menu-link">
                                    <div className="menu-text">Bank Branches</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/bankaccounts" className="menu-link">
                                    <div className="menu-text">Bank Accounts</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/members" className="menu-link">
                                    <div className="menu-text">Members</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/beneficiaries" className="menu-link">
                                    <div className="menu-text">Beneficiaries</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/insuranceproducts" className="menu-link">
                                    <div className="menu-text">Insurance Product</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/benefits" className="menu-link">
                                    <div className="menu-text">Benefit</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/jurisdictions" className="menu-link">
                                    <div className="menu-text">Jurisdictions</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/jurisdictionlevies" className="menu-link">
                                    <div className="menu-text">Jurisdiction Levy</div>
                                </a>
                            </div>
                            <div className="menu-item">
                                <a href="/insurers" className="menu-link">
                                    <div className="menu-text">Insurer</div>
                                </a>
                            </div>
	                       {/* <div className="menu-item">
                                <a href="/companies" className="menu-link">
                                    <div className="menu-text">Company</div>
                                </a>
                            </div> */}
                            <div className="menu-item">
                                <a href="/invoice_states" className="menu-link">
                                    <div className="menu-text">Invoice States</div>
                                </a>
                            </div>
	                       {/* <div className="menu-item">
                                <a href="/policies" className="menu-link">
                                    <div className="menu-text">Policy</div>
                                </a>
                            </div> */}
	                       {/* <div className="menu-item">
                                <a href="/policydetails" className="menu-link">
                                    <div className="menu-text">Policy Details</div>
                                </a>
                            </div> */}
	                       <div className="menu-item">
                                <a href="/policystatuses" className="menu-link">
                                    <div className="menu-text">Policy Status</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/policyapprovalstatuses" className="menu-link">
                                    <div className="menu-text">Policy Approval Status</div>
                                </a>
                            </div>
	                      
	                       {/* <div className="menu-item">
                                <a href="/batchschedulenos" className="menu-link">
                                    <div className="menu-text">Batch Schedule No</div>
                                </a>
                            </div> */}
	                       {/* <div className="menu-item">
                                <a href="/policyserialnumbers" className="menu-link">
                                    <div className="menu-text">Policy Serial Number</div>
                                </a>
                            </div> */}
	                       <div className="menu-item">
                                <a href="/policyserialnumberallocationlogs" className="menu-link">
                                    <div className="menu-text">Policy Serial Number Allocation Log</div>
                                </a>
                            </div>
	                       
                            <div className="menu-item">
                                <a href="/jurisdiction_businesspolicies" className="menu-link">
                                    <div className="menu-text">Jurisdiction Businesspolicies</div>
                                </a>
                            </div>
	                       
	                       <div className="menu-item">
                                <a href="/invoices" className="menu-link">
                                    <div className="menu-text">Invoices</div>
                                </a>
                            </div>
	                       
	                       <div className="menu-item">
                                <a href="/reinsurers" className="menu-link">
                                    <div className="menu-text">Re Insurer</div>
                                </a>
                            </div>
	                       <div className="menu-item">
                                <a href="/retros" className="menu-link">
                                    <div className="menu-text">Re Tro</div>
                                </a>
                            </div>
	                       
	                       <div className="menu-item">
                                <a href="/receipts" className="menu-link">
                                    <div className="menu-text">Receipts</div>
                                </a>
                            </div>
	                      
	                       <div className="menu-item">
                                <a href="/treaties" className="menu-link">
                                    <div className="menu-text">Treaties</div>
                                </a>
                            </div>
	                     
	                                   
                           
                        </div>
                    </div>
                    <div className="menu-item d-flex">
                        <a href="/" className="app-sidebar-minify-btn ms-auto"
                            data-toggle="app-sidebar-minify"><i className="fa fa-angle-double-left"></i></a>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default SideBar;