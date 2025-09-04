import  { Fragment, useState } from "react";
import { Card, Col, Dropdown, ListGroup, Modal, Pagination, Row } from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import Pageheader from "../../../components/page-header/pageheader";
import { Accessdata, Fileoptions, Filesdata, Fileseries, Filesloopdata, Folderdata  } from "../../../components/common/data/pages/filemanagerdata";
import { Link } from "react-router-dom";
import SpkButton from "../../../@spk-reusable-components/reusable-uielements/spk-button";
import SpkTablescomponent from "../../../@spk-reusable-components/reusable-tables/tables-component";
import Spkimagecapcards from "../../../@spk-reusable-components/reusable-uielements/cards/spkimagecapcards";
import SpkListgroup from "../../../@spk-reusable-components/reusable-uielements/spk-listgroup";
import Spkapexcharts from "../../../@spk-reusable-components/reusable-plugins/spk-apexcharts";
import SpkProgress from "../../../@spk-reusable-components/reusable-uielements/spk-progress";
import SpkDropdown from "../../../@spk-reusable-components/reusable-uielements/spk-dropdown";
import face9 from "../../../assets/images/faces/9.jpg"
import filemanager1 from "../../../assets/images/media/file-manager/1.png"
import filemanager2 from "../../../assets/images/media/file-manager/2.png"

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const FileManager = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [files, setFiles] = useState<any>([]);

    const FooterContent = (
        <tr className="">
            <td colSpan={5}>
                <nav aria-label="Page navigation">
                    <nav aria-label="Page navigation" className="pagination-style-4 float-end">
                        <Pagination className="pagination mb-0 overflow-auto">
                            <Pagination.Item disabled>Previous</Pagination.Item>
                            <Pagination.Item active>1</Pagination.Item>
                            <Pagination.Item>2</Pagination.Item>
                            <Pagination.Item className="pagination-next">next</Pagination.Item>
                        </Pagination>
                    </nav>
                </nav>
            </td>
        </tr>
    );
    return (
        <Fragment>
            {/* <!-- Page Header --> */}

            <Pageheader title="Pages" currentpage="File Manager" activepage="File Manager" />

            {/* <!-- Page Header Close --> */}

            {/* <!-- Start:: row-1 --> */}
            <Row>
                <Col xxl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className=" custom-card">
                                <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                    <div className="flex-fill">
                                        <h6 className="fw-medium mb-0">File Manager</h6>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-3 p-3 border-bottom border-block-end-dashed">
                                    <span className="avatar avatar-xl online">
                                        <img src={face9} alt="" />
                                    </span>
                                    <div className="main-profile-info">
                                        <h6 className="fw-semibold mb-1">Daniel David </h6>
                                        <p className="text-muted fs-11 mb-2">Web Designer</p>
                                        <p className="mb-0">danieldavid@mail.com </p>
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="list-unstyled files-main-nav" id="files-main-nav">
                                        <li className="px-0 pt-0">
                                            <span className="fs-12 text-muted">My Files</span>
                                        </li>
                                        {Filesloopdata.map((idx) => (
                                            <li className={idx.class1} key={Math.random()}>
                                                <Link to="#!">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <i className={`ri-${idx.icon} fs-16`}></i>
                                                        </div>
                                                        <span className="flex-fill text-nowrap">
                                                            {idx.text1}
                                                        </span>
                                                        <span className={idx.class}>{idx.text2}</span>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                        <li className="px-0 pt-0">
                                            <span className="fs-12 text-muted">Most Recent</span>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-primary-transparent text-primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link to="#!" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">VID-14512223-AKP823.mp4</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">1.2KB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-primary1-transparent text-primary1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link to="#!" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">AUD-14512223-AKP823.mp3</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">25GB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center gap-2">
                                                <div className="me-0">
                                                    <span className="avatar avatar-md bg-primary2-transparent text-primary2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><path d="M112,175.67V168a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v40a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8v-8.82L144,216V160Z" opacity="0.2" /><polyline points="112 175.67 144 160 144 216 112 199.18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><rect x="40" y="160" width="72" height="56" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><polygon points="152 32 152 88 208 88 152 32" opacity="0.2" /><polyline points="152 32 152 88 208 88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /><path d="M176,224h24a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" /></svg>
                                                    </span>
                                                </div>
                                                <div>
                                                    <Link to="#!" data-bs-toggle="offcanvas"
                                                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">VID-14211110-AKP823.mp4</Link>
                                                </div>
                                                <div className="ms-auto">
                                                    <span className="fw-medium text-muted">36GB</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="px-0 pt-3">
                                            <span className="fs-12 text-muted">Upload File</span>
                                        </li>
                                        <li className="p-3 border border-dashed filemanager-filepong">
                                            <label className="form-label">Drop File here :</label>
                                            <FilePond className="multiple-filepond" files={files} onupdatefiles={setFiles} allowMultiple={true} maxFiles={3} server="/api" name="files" labelIdle='Drag & Drop your file here or click ' />
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Body className="p-0">
                            <div className="file-manager-folders">
                                <div className="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                                    <div className="flex-fill">
                                        <h6 className="fw-medium mb-0">All Folders</h6>
                                    </div>
                                    <div className="d-flex gap-2 flex-lg-nowrap flex-wrap justify-content-sm-end w-75">
                                        <div className="input-group">
                                            <input type="text" className="form-control w-50" placeholder="Search File" aria-describedby="button-addon01" />
                                            <SpkButton Buttonvariant="primary-light" Buttontype="button" Id="button-addon01"><i className="ri-search-line"></i></SpkButton>
                                        </div>
                                        <SpkButton Buttonvariant="primary" onClickfunc={handleShow} Customclass="btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light text-nowrap"
                                            data-bs-toggle="modal" data-bs-target="#create-folder">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create Folder
                                        </SpkButton>
                                        <Modal show={show} onHide={handleClose} centered className="fade" id="create-folder" tabIndex={-1}
                                            aria-labelledby="create-folder" data-bs-keyboard="false"
                                        >
                                                <Modal.Header>
                                                    <h6 className="modal-title" id="staticBackdropLabel">Create Folder
                                                    </h6>
                                                    <SpkButton Buttonvariant="" onClickfunc={handleClose} Buttontype="button" Customclass="btn-close" data-bs-dismiss="modal"
                                                        aria-label="Close"></SpkButton>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                    <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                                                </Modal.Body>
                                                <div className="modal-footer">
                                                    <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={handleClose}
                                                        data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                    <SpkButton Buttonvariant="success" Buttontype="button" Size="sm" >Create</SpkButton>
                                                </div>
                                        </Modal>
                                        <SpkButton Buttonvariant="" onClickfunc={handleShow1} Customclass="btn btn-primary1-light btn-w-md d-flex align-items-center justify-content-center btn-wave waves-light"
                                            data-bs-toggle="modal" data-bs-target="#create-file">
                                            <i className="ri-add-circle-line align-middle me-1"></i>Create File
                                        </SpkButton>
                                        <Modal show={show1} onHide={handleClose1} centered className="fade" id="create-file" tabIndex={-1}
                                            aria-labelledby="create-file" data-bs-keyboard="false"
                                        >
                                                <Modal.Header>
                                                    <h6 className="modal-title" id="staticBackdropLabel1">Create File
                                                    </h6>
                                                    <SpkButton Buttonvariant="" Buttontype="button" onClickfunc={handleClose1} Customclass="btn-close" Buttondismiss="modal"
                                                        Buttonlabel="Close"></SpkButton>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <label htmlFor="create-file1" className="form-label">File Name</label>
                                                    <input type="text" className="form-control" id="create-file1" placeholder="File Name" />
                                                </Modal.Body>
                                                <div className="modal-footer">
                                                    <SpkButton Buttonvariant="light" Buttontype="button" Size="sm" Customclass="btn-icon" onClickfunc={handleClose1}
                                                        data-bs-dismiss="modal"><i className="ri-close-fill"></i></SpkButton>
                                                    <SpkButton Buttonvariant="success" Buttontype="button" Size="sm">Create</SpkButton>
                                                </div>
                                        </Modal>
                                    </div>
                                </div>
                                <div className="p-3 file-folders-container">
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Quick Access</p>
                                        <Link to="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <div className="row mb-3">
                                        {Accessdata.map((idx) => (
                                            <Col xxl={4} xl={6} lg={6} md={6} className="" key={Math.random()}>
                                                <Spkimagecapcards Customclass="shadow-none border" Custombodyclass="">
                                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                                        <div className={`main-card-icon ${idx.color}`}>
                                                            <div className={`avatar avatar-md bg-${idx.color}-transparent border border-${idx.color} border-opacity-10`}>
                                                                <div className={`avatar avatar-sm text-${idx.color}`}>
                                                                    <i className={`ti ti-${idx.icon} fs-24`}></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <Link to="#!" className="d-block fw-medium">{idx.title}</Link>
                                                            <span className="fs-12 text-muted">{idx.percentage}</span>
                                                        </div>
                                                        <div className="text-end">
                                                            <span className="fw-medium">{idx.files}</span>
                                                            <span className="d-block fs-12 text-muted">{idx.storage}</span>
                                                        </div>
                                                    </div>
                                                </Spkimagecapcards>
                                            </Col>
                                        ))}
                                    </div>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Folders</p>
                                        <Link to="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <div className="row mb-2">
                                        {Folderdata.map((idx) => (
                                            <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6" key={Math.random()}>
                                                <Card className=" custom-card shadow-none border">
                                                    <Card.Body>
                                                        <div className="mb-4 folder-svg-container d-flex flex-wrap justify-content-between align-items-top">
                                                            <div className="avatar">
                                                                <img src={filemanager1} alt="" className="img-fluid" />
                                                            </div>
                                                            <div>
                                                                <SpkDropdown toggleas="a" Customtoggleclass="no-caret" Icon={true} IconClass="ri-more-fill fw-semibold text-muted">
                                                                    <li><Dropdown.Item>Delete</Dropdown.Item></li>
                                                                    <li><Dropdown.Item>Rename</Dropdown.Item></li>
                                                                    <li><Dropdown.Item>Hide Folder</Dropdown.Item></li>
                                                                </SpkDropdown>
                                                            </div>
                                                        </div>
                                                        <p className="fs-14 fw-medium mb-1 lh-1">
                                                            <Link to="#!">{idx.text1}</Link>
                                                        </p>
                                                        <div className="d-flex align-items-center justify-content-between flex-wrap">
                                                            <div>
                                                                <span className="text-muted fs-12">
                                                                    {idx.text2}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <span className="text-default fw-medium">
                                                                    {idx.text3}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="d-flex mb-3 align-items-center justify-content-between">
                                        <p className="mb-0 fw-medium fs-14">Recent Files</p>
                                        <Link to="#!" className="fs-12 text-muted fw-medium"> View All<i className="ti ti-arrow-narrow-right ms-1"></i> </Link>
                                    </div>
                                    <Row>
                                        <Col xl={12}>
                                            <div className="table-responsive border border-bottom-0">
                                                <SpkTablescomponent tBodyClass="files-list" footchildren={FooterContent} tableClass="text-nowrap table-hover" header={[{ title: 'File Name' }, { title: 'Category' }, { title: 'Size' }, { title: 'Date Modified' }, { title: 'Action' }]}>
                                                    {Filesdata.map((file, index) => (
                                                        <tr key={index} className={file.mainClass}>
                                                            <th scope="row">
                                                                <div className="d-flex align-items-center">
                                                                    <div className="me-0">
                                                                        <span className={`avatar avatar-md ${file.iconClass} text-${file.iconClass} svg-${file.iconClass}`}>
                                                                            {file.path}
                                                                        </span>
                                                                    </div>
                                                                    <div>
                                                                        <Link to="#!" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                                            {file.name}
                                                                        </Link>
                                                                    </div>
                                                                </div>

                                                            </th>
                                                            <td>{file.type}</td>
                                                            <td>{file.size}</td>
                                                            <td>{file.date}</td>
                                                            <td>
                                                                <div className="hstack gap-2 fs-15">
                                                                    <Link to="#!" className="btn btn-icon btn-sm btn-primary2-light">
                                                                        <i className="ri-eye-line"></i>
                                                                    </Link>
                                                                    <Link to="#!" className="btn btn-icon btn-sm btn-primary3-light">
                                                                        <i className="ri-delete-bin-line"></i>
                                                                    </Link>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </SpkTablescomponent>

                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className=" custom-card overflow-hidden">
                        <Card.Body>
                            <div className="d-flex align-items-start gap-3">
                                <div>
                                    <span className="avatar avatar-md bg-secondary-transparent">
                                        <i className="ri-hard-drive-2-fill fs-16"></i>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className=" mb-3"> All Folders
                                        <p className="mb-0"><span className="fw-bold fs-14">68.12GB</span> Used</p>
                                        <p className="fs-11 text-muted mb-0">21.35GB free space</p>
                                    </div>
                                </div>
                            </div>
                            <div id="file-manager-storage">
                                <Spkapexcharts chartOptions={Fileoptions} chartSeries={Fileseries} type="donut" width={"100%"} height={200} />
                            </div>
                        </Card.Body>
                        <div className="card-footer p-0">
                            <div className="m-3 mb-0">
                                <span className="fs-12 text-muted">Storage Details</span>
                            </div>
                            <SpkListgroup as="ul" CustomClass="mb-2" Variant="flush">
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="main-card-icon primary">
                                            <div className="avatar avatar-lg bg-primary-transparent border border-primary border-opacity-10">
                                                <div className="avatar avatar-sm text-primary">
                                                    <i className="ti ti-photo fs-20"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-medium">Media</span>
                                            <span className="text-muted fs-12 d-block">3,145 files</span>
                                        </div>
                                        <div>
                                            <span className="fw-medium text-primary mb-0 fs-14">45GB</span>
                                        </div>
                                    </div>
                                    <SpkProgress mainClass="progress-md p-1 bg-primary-transparent mt-3" striped={true} animated={true} now={90} />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="main-card-icon primary1">
                                            <div className="avatar avatar-lg bg-primary1-transparent border border-primary1 border-opacity-10">
                                                <div className="avatar avatar-sm text-primary1">
                                                    <i className="ti ti-download fs-20"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-medium">Downloads</span>
                                            <span className="text-muted fs-12 d-block">568 files</span>
                                        </div>
                                        <div>
                                            <span className="fw-medium text-primary1 mb-0 fs-14">66GB</span>
                                        </div>
                                    </div>
                                    <SpkProgress variant="primary1" mainClass="progress-md p-1 bg-primary1-transparent mt-3" striped={true} animated={true} now={86} aria-valuenow={86} aria-valuemin={0} aria-valuemax={100} />

                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="main-card-icon primary2">
                                            <div className="avatar avatar-lg bg-primary2-transparent border border-primary2 border-opacity-10">
                                                <div className="avatar avatar-sm text-primary2">
                                                    <i className="ti ti-layout-grid fs-20"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-medium">Apps</span>
                                            <span className="text-muted fs-12 d-block">74 files</span>
                                        </div>
                                        <div>
                                            <span className="fw-medium text-primary2 mb-0 fs-14">55GB</span>
                                        </div>
                                    </div>
                                    <SpkProgress variant="primary2" mainClass="progress-md p-1 bg-primary2-transparent mt-3" striped={true} animated={true} now={75} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <div className="d-flex align-items-center gap-3">
                                        <div className="main-card-icon primary3">
                                            <div className="avatar avatar-lg bg-primary3-transparent border border-primary3 border-opacity-10">
                                                <div className="avatar avatar-sm text-primary3">
                                                    <i className="ti ti-file-description fs-20"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-medium">Documents</span>
                                            <span className="text-muted fs-12 d-block">1,441 files</span>
                                        </div>
                                        <div>
                                            <span className="fw-medium text-primary3 mb-0 fs-14">34GB </span>
                                        </div>
                                    </div>
                                    <SpkProgress variant="primary3" mainClass="progress-md p-1 bg-primary3-transparent mt-3" striped={true} animated={true} now={80} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                                </ListGroup.Item>
                            </SpkListgroup>
                        </div>
                    </Card>
                    <Card className=" custom-card">
                        <Card.Body>
                            <div className="filemanager-upgrade-storage w-100 text-center">
                                <span className="d-block mb-3 pb-1 bg-primary1-transparent rounded-2"> <img src={filemanager2} alt="" /> </span>
                                <span className="fs-16 fw-semibold text-default">Get more storage with Pro.</span>
                                <span className="d-block text-muted mt-2 pt-1">Upgrade now for increased storage space and enhanced functionality.</span>
                                <div className="mt-4 d-grid"> <SpkButton Buttonvariant="primary" Size="lg" Customclass="waves-effect waves-light">Upgrade Now</SpkButton>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {/* <!-- End:: row-1 --> */}
        </Fragment>
    )
};

export default FileManager;