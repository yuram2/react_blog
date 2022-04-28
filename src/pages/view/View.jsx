import React from "react";
import "./view.css";

export default function View() {
    return (
        <section id="blog-type" className="center mb100">
            <div className="blog__label">
                <h3 className="section__title">내가 그린 기린 그림</h3>
                <div>
                    <span className="author">
                        <a href="/">이고기</a>
                    </span>
                    <span className="date">2022.04.28</span>
                    <br></br>
                    <span className="modify">
                        <a href="/">수정</a>
                    </span>
                    <span className="delete">
                        <a href="/">삭제</a>
                    </span>
                </div>
            </div>
            <div className="container">
                <div className="blog__layout">
                    <div className="blog__left">
                        <h4>내가 그린 기린 그림</h4>
                        <div>
                        내가 그린 기린 그림은 목이 긴 기린 그림
                        </div>
                    </div>
                    <div className="blog__right">
                        <div className="ad">
                            <iframe
                                title="쿠팡"
                                src="https://coupa.ng/ccozLj"
                                width="300"
                                height="300"
                                frameborder="0"
                                scrolling="no"
                                referrerpolicy="unsafe-url"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}