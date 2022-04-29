import React from "react";
import "./mypage.css";

export default function Mypage() {
    return (
        <section className="blog-login">
            <div className="member-form">
                <h3>회원 정보</h3>
                <div className="join-intro">
                    <div className="face">
                        <img
                            src="https://source.unsplash.com/800x580/?blog,people"
                            alt="기본이미지"
                        />
                    </div>
                    <div className="intro">자기소개해주세요!</div>
                </div>
                <div className="join-info">
                    <ul>
                        <li>
                            <strong>이메일</strong>
                            <span>lur0872@gmail.com</span>
                        </li>
                        <li>
                            <strong>닉네임</strong>
                            <span>졸린곰</span>
                        </li>
                        <li>
                            <strong>이름</strong>
                            <span>유람</span>
                        </li>
                        <li>
                            <strong>생일</strong>
                            <span>1999-09-03</span>
                        </li>
                        <li>
                            <strong>번호</strong>
                            <span>010-1234-5678</span>
                        </li>
                        <li>
                            <strong>성별</strong>
                            <span>m</span>
                        </li>
                        <li>
                            <strong>사이트</strong>
                            <span>github.com/yuram2</span>
                        </li>
                    </ul>
                </div>

                <div className="join-btn">
                    <a href="/">수정하기</a>
                    <a href="/">탈퇴하기</a>
                </div>
            </div>
        </section>
    );
}