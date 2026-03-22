import  { useEffect, useState } from "react";
import Breadcrumbs from "../common/breadcrumbs";
import Aos from "aos";
import ImageWithBasePath from "../../core/data/img/ImageWithBasePath";
import DashboardMenu from "./common/dashboard-menu";
import { Link } from "react-router-dom";

const UserMessages = () => {
  const [openChat, setOpenChat] = useState(false);

  const chatOpen = () => {
    setOpenChat(!openChat);
  };

  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);
  return (
    <>
      <Breadcrumbs title="User Message" subtitle="User Message" />
      <DashboardMenu />
      <div className="content content-chat top-space-chat">
        <div className="container">
          {/* Content Header */}
          <div className="content-header">
            <h4>Messages</h4>
          </div>
          {/* /Content Header */}
          <div className={`row chat-window ${openChat ? 'chat-slide' : ''}`}>
            <div className="col-xl-12">
              <div className={`chat-window ${openChat ? 'chat-slide' : ''}`}>
                {/* Chat Left */}
                <div className="chat-cont-left">
                  <div className="chat-header">
                    <span>Chats</span>
                    <Link to="#" className="chat-compose">
                      <i className="feather icon-plus-circle" />
                    </Link>
                  </div>
                  <form className="chat-search">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <i className="fas fa-search" />
                      </div>
                      <input
                        type="text"
                        className="form-control rounded-pill"
                        placeholder="Search"
                      />
                    </div>
                  </form>
                  <div className="chat-users-list">
                    <div className="chat-scroll">
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Mark Villiams</div>
                            <div className="user-last-chat">
                              Have you called them?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">2 min</div>
                            <div className="badge badge-success rounded-pill">
                              15
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat active d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-09.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Elizabeth Sosa</div>
                            <div className="user-last-chat">
                              I&apos;ll call you later
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">8:01 PM</div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-10.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Michael Howard</div>
                            <div className="user-last-chat">Thank you</div>
                          </div>
                          <div>
                            <div className="last-chat-time block">7:30 PM</div>
                            <div className="badge badge-success rounded-pill">
                              3
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-11.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Horace Keene</div>
                            <div className="user-last-chat">
                              Have you called them?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">
                              5 Mins Ago
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-offline">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-12.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Marvin Campbell</div>
                            <div className="user-last-chat">
                              Yesterday i completed the task
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">11:21 AM</div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-13.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">James Albert</div>
                            <div className="user-last-chat">
                              What is the major functionality?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">10:05 AM</div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-14.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Richard Ohare</div>
                            <div className="user-last-chat">
                              This has allowed me to showcase not only my
                              technical skills
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">
                              Yesterday
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#" 
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-offline">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-15.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Paul Richard</div>
                            <div className="user-last-chat">
                              Let&apos;s talk briefly in the evening.
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Sunday</div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-online">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-07.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">John Gibbs </div>
                            <div className="user-last-chat">
                              Do you have any collections? If so, what of?
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Saturday</div>
                          </div>
                        </div>
                      </Link>
                      <Link onClick={chatOpen}
                        to="#"
                        className="notify-block read-chat d-flex open-chat"
                      >
                        <div className="media-img-wrap flex-shrink-0">
                          <div className="avatar avatar-away">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-06.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="media-body chat-custom flex-grow-1">
                          <div>
                            <div className="user-name">Judy Mercer</div>
                            <div className="user-last-chat">
                              Connect the two modules with in 1 day.
                            </div>
                          </div>
                          <div>
                            <div className="last-chat-time block">Friday</div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* /Chat Left */}
                {/* Chat Right */}
                <div className="chat-cont-right">
                  <div className="chat-header">
                    <Link onClick={chatOpen}
                      id="back_user_list"
                      to="#"
                      className="back-user-list"
                    >
                      <i className="feather icon-chevron-left" />
                    </Link>
                    <div className="notify-block d-flex">
                      <div className="media-img-wrap flex-shrink-0">
                        <div className="avatar avatar-online">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-08.jpg"
                            alt="User Image"
                            className="avatar-img rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="media-body flex-grow-1">
                        <div className="user-name">Mark Villiams</div>
                        <div className="user-status">online</div>
                      </div>
                    </div>
                    <div className="chat-options">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#voice_call"
                      >
                        <i className="feather icon-phone" />
                      </Link>
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#video_call"
                      >
                        <i className="feather icon-video" />
                      </Link>
                      <Link to="#">
                        <i className="feather icon-more-vertical" />
                      </Link>
                    </div>
                  </div>
                  <div className="chat-body">
                    <div className="chat-scroll">
                      <ul className="list-unstyled">
                        <li className="notify-block sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Hello. What can I do for you?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:30 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="notify-block received d-flex">
                          <div className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>I&apos;m just looking around.</p>
                                <p>
                                  Will you tell me something about yourself?
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:35 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>Are you there? That time!</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:40 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <ImageWithBasePath
                                      src="assets/img/chat-img-01.jpg"
                                      alt="Attachment"
                                    />
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download" />
                                    </Link>
                                  </div>
                                  <div className="chat-attachment">
                                    <ImageWithBasePath
                                      src="assets/img/chat-img-02.jpg"
                                      alt="Attachment"
                                    />
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download" />
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:41 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="notify-block sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Where?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <p>
                                  OK, my name is Limingqiang. I like singing,
                                  playing basketballand so on.
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:42 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="msg-box">
                              <div>
                                <div className="chat-msg-attachments">
                                  <div className="chat-attachment">
                                    <ImageWithBasePath
                                      src="assets/img/chat-img-03.jpg"
                                      alt="Attachment"
                                    />
                                    <Link
                                      to="#"
                                      className="chat-attach-download"
                                    >
                                      <i className="fas fa-download" />
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:50 AM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="notify-block received d-flex">
                          <div className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>You wait for notice.</p>
                                <p>Consectetuorem ipsum dolor sit?</p>
                                <p>Ok?</p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>8:55 PM</span>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="chat-date">Today</li>
                        <li className="notify-block received d-flex">
                          <div className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit,
                                </p>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:17 AM</span>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">Edit</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="notify-block sent d-flex">
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <p>Lorem ipsum dollar sit</p>
                                <div className="chat-msg-actions dropdown">
                                  <Link
                                    to="#"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                  >
                                    <i className="fe fe-elipsis-v" />
                                  </Link>
                                  <div className="dropdown-menu dropdown-menu-end">
                                    <Link className="dropdown-item" to="#">
                                      Delete
                                    </Link>
                                  </div>
                                </div>
                                <ul className="chat-msg-info">
                                  <li>
                                    <div className="chat-time">
                                      <span>10:19 AM</span>
                                    </div>
                                  </li>
                                  <li>
                                    <Link to="#">Edit</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="notify-block received d-flex">
                          <div className="avatar flex-shrink-0">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-08.jpg"
                              alt="User Image"
                              className="avatar-img rounded-circle"
                            />
                          </div>
                          <div className="media-body flex-grow-1">
                            <div className="msg-box">
                              <div>
                                <div className="msg-typing">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="chat-footer">
                    <div className="input-group">
                      <div className="btn-file btn">
                        <i className="fa fa-paperclip" />
                        <input type="file" />
                      </div>
                      <input
                        type="text"
                        className="input-msg-send form-control rounded-pill"
                        placeholder="Type something"
                      />
                      <button
                        type="button"
                        className="btn msg-send-btn rounded-pill ms-2"
                      >
                        <i className="fa-solid fa-paper-plane" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* /Chat Right */}
              </div>
            </div>
          </div>
          {/* /Row */}
        </div>
      </div>

      {/* Voice Call Modal */}
      <div className="modal fade call-modal" id="voice_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Outgoing Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        alt="User Image"
                        src="assets/img/profiles/avatar-08.jpg"
                        className="call-avatar"
                      />
                      <h4>Darren Elder</h4>
                      <span>Connecting...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="feather icon-phone-off" />
                      </Link>
                      <Link
                        to="#"
                        className="btn call-item call-start"
                      >
                        <i className="feather icon-phone" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Outgoing Call */}
            </div>
          </div>
        </div>
      </div>
      {/* /Voice Call Modal */}
      {/* Video Call Modal */}
      <div className="modal fade call-modal" id="video_call">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              {/* Incoming Call */}
              <div className="call-box incoming-box">
                <div className="call-wrapper">
                  <div className="call-inner">
                    <div className="call-user">
                      <ImageWithBasePath
                        className="call-avatar"
                        src="assets/img/profiles/avatar-08.jpg"
                        alt="User Image"
                      />
                      <h4>Darren Elder</h4>
                      <span>Calling ...</span>
                    </div>
                    <div className="call-items">
                      <Link
                        to="#"
                        className="btn call-item call-end"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="feather icon-phone-off" />
                      </Link>
                      <Link
                        to="#"
                        className="btn call-item call-start"
                      >
                        <i className="feather icon-video" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Incoming Call */}
            </div>
          </div>
        </div>
      </div>
      {/* Video Call Modal */}
    </>
  );
};

export default UserMessages;
