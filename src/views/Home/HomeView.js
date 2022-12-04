import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../../styles/temple.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineNavigateNext } from 'react-icons/md';
import SvgComponent from '../../dummy/icon';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShow } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiChevronUp } from 'react-icons/bi';
import Zalo from '../../dummy/data';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';

const HomeView = () => {
  const { t } = useTranslation();
  return (
    <div className="x">
      <div className="wrapper">
        <div className="header">
          <div className="header--text">{t('home.header_one')}</div>
          <div className="header--text_two">{t('home.header_two')}</div>

          <span className="header--text_three">{t('home.header_three')}</span>

          <div>
            <input placeholder="Tìm kiếm" name="search" className="search" />
            <AiOutlineSearch className="icon" />
          </div>
        </div>
        <span className="series--text">
          <span className="series--text_one">{t('home.series_one')}</span>
          <MdOutlineNavigateNext className="series--icon" />
          <span className="series--text_two">{t('home.series_two')}</span>
          <MdOutlineNavigateNext className="series--icon" />
          <span className="series--text_three">{t('home.series_three')}</span>
        </span>
        <SvgComponent className="topic" />
        <div className="block--block">
          <div className="sidebar--right">
            <div className="block--icon">
              <div>
                <RiArrowGoBackFill className="back" />
                <span className="icon--text_one">{t('home.icon_text')}</span>
              </div>
              <div className="op">
                <span className="icon--text_two">{t('home.icon_text_one')}</span>
                <BsFillShareFill className="share" />
                <span className="icon--text_three">{t('home.icon_text_two')}</span>
                <AiOutlineHeart className="heart" />
              </div>
            </div>
            <div className="content">
              <span className="soil">Đất</span>
              <span className="soil--text">
                {t('home.content_text_one')}
                <span className="soil--text_one">{t('home.content_text_two')}</span>
              </span>
            </div>
            <div className="content--one">
              <div>
                <BiShow className="see" />
                <span className="content--one_text">{t('home.content_text_three')}</span>
                <BsFillShareFill className="share--two" />
                <span className="content--one_text--two">{t('home.content_text_four')}</span>
                <span className="content--one_text--three">{t('home.content_text_five')}</span>
                <span className="content--one_text--four">{t('home.content_text_six')}</span>
                <AiOutlineMail className="mail-two" />
                <span className="content--one_text--five">{t('home.content_text_seven')}</span>
              </div>
              <div>
                <AiOutlineClockCircle className="clock" />
                <span className="content--one_text--six">{t('home.content_text_eight')}</span>
              </div>
            </div>
            <div className="sec"></div>
            <div className="info">
              <span className="info--text">{t('home.info_text')}</span>
              <span className="info--sec"></span>
              <span className="info--text_two">{t('home.info_text_two')}</span>
              <span className="info--text_three">{t('home.info_text_three')}</span>
              <span className="info--text_four">{t('home.info_text_four')}</span>
            </div>
            <div className="info--soil_block">
              <div className="block--one">
                <span className="block--one_text">{t('home.block_text_one')}</span>
                <BiChevronUp className="up" />
              </div>
              <div className="block--content">
                <span className="block--content_one">{t('home.content_one')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_1">
                <span className="block--content_one">{t('home.content_three')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_2">
                <span className="block--content_one">{t('home.content_four')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_3">
                <span className="block--content_one">{t('home.content_seven')}</span>
                <span className="block--content_two">{t('home.content_six')}</span>
              </div>
              <div className="block--content_4">
                <span className="block--content_one">{t('home.content_eight')}</span>
                <span className="block--content_two">{t('home.content_six')}</span>
              </div>
            </div>
            <div className="info--home_block">
              <div className="block--one">
                <span className="block--one_text">{t('home.content_nineteen')}</span>
                <BiChevronUp className="up" />
              </div>
              <div className="block--content">
                <span className="block--content_one">{t('home.content_nine')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_1">
                <span className="block--content_one">{t('home.content_ten')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_2">
                <span className="block--content_one">{t('home.content_eleven')}</span>
                <span className="block--content_two">{t('home.content_two')}</span>
              </div>
              <div className="block--content_3">
                <span className="block--content_one">{t('home.content_twelve')}</span>
                <span className="block--content_two">{t('home.content_six')}</span>
              </div>
              <div className="block--content_4">
                <span className="block--content_one">{t('home.content_thirdteen')}</span>
                <span className="block--content_two">{t('home.content_six')}</span>
              </div>
              <div className="block--content_5">
                <span className="block--content_one">{t('home.content_four')}</span>
                <span className="block--content_two">{t('home.content_twenty')}</span>
              </div>
              <div className="block--content_6">
                <span className="block--content_one">{t('home.content_fiveteen')}</span>
                <span className="block--content_two">{t('home.content_twenty_one')}</span>
              </div>
              <div className="block--content_7">
                <span className="block--content_one">{t('home.content_sixteen')}</span>
                <span className="block--content_two">{t('home.content_five')}</span>
              </div>
              <div className="block--content_8">
                <span className="block--content_one">{t('home.content_seventeen')}</span>
                <span className="block--content_two">{t('home.content_eightteen')}</span>
              </div>
            </div>
            <div className="info--type_block">
              <div className="block--one">
                <span className="block--one_text">{t('home.text_one')}</span>
                <BiChevronUp className="up" />
              </div>
              <div className="block--content">
                <span className="block--content_one">{t('home.text_two')}</span>
                <span className="block--content_two">{t('home.text_ten')}</span>
              </div>
              <div className="block--content_1">
                <span className="block--content_one">{t('home.text_three')}</span>
                <span className="block--content_two">{t('home.content_eleven')}</span>
              </div>
              <div className="block--content_2">
                <span className="block--content_one">{t('home.text_four')}</span>
                <span className="block--content_two">{t('home.text_twelve')}</span>
              </div>
              <div className="block--content_3">
                <span className="block--content_one">{t('home.text_five')}</span>
                <span className="block--content_two">{t('home.text_thridteen')}</span>
              </div>
              <div className="block--content_4">
                <span className="block--content_one">{t('home.text_six')}</span>
                <span className="block--content_two">{t('home.text_fourteen')}</span>
              </div>
              <div className="block--content_5">
                <span className="block--content_one">{t('home.text_seven')}</span>
                <span className="block--content_two">{t('home.text_fiveteen')}</span>
              </div>
              <div className="block--content_6">
                <span className="block--content_one">{t('home.text_eight')}</span>
                <span className="block--content_two">{t('home.text_sixteen')}</span>
              </div>
              <div className="block--content_7">
                <span className="block--content_one">{t('home.text_nine')}</span>
                <span className="block--content_two">{t('home.text_seventeen')}</span>
              </div>
            </div>
            <div className="info--law_block">
              <div className="block--one">
                <span className="block--one_text">{t('home.text_law_one')}</span>
                <BiChevronUp className="up" />
              </div>
              <div className="block--content">
                <span className="block--content_one">{t('home.text_law_two')}</span>
                <span className="block--content_two">{t('home.text_law_seven')}</span>
              </div>
              <div className="block--content_1">
                <span className="block--content_one">{t('home.text_law_three')}</span>
                <span className="block--content_two">{t('home.text_law_eight')}</span>
              </div>
              <div className="block--content_2">
                <span className="block--content_one">{t('home.text_law_four')}</span>
                <span className="block--content_two">{t('home.text_law_nine')}</span>
              </div>
              <div className="block--content_3">
                <span className="block--content_one">{t('home.text_law_five')}</span>
                <span className="block--content_two">{t('home.content_five')}</span>
              </div>
              <div className="block--content_4">
                <span className="block--content_one">{t('home.text_law_six')}</span>
                <span className="block--content_two">{t('home.content_five')}</span>
              </div>
            </div>
          </div>
          <div className="sidebar--left">
            <div className="info--locate">
              <div className="block--locate">
                <span className="info--locate_text">{t('home.location_text_one')}</span>
              </div>
              <div className="block--locate_two">
                <span className="info--locate_text--one">{t('home.location_text_two')}</span>
                <span className="info--locate_text--two">{t('home.location_text_seven')}</span>
              </div>
              <div className="block--locate_three">
                <span className="info--locate_text--three">{t('home.location_text_three')}</span>
                <span className="info--locate_text--four">{t('home.location_text_eight')}</span>
              </div>
              <div className="block--locate_four">
                <span className="info--locate_text--five">{t('home.location_text_four')}</span>
                <span className="info--locate_text--six">{t('home.location_text_nine')}</span>
              </div>
              <div className="block--locate_four">
                <span className="info--locate_text--five">{t('home.location_text_five')}</span>
                <span className="info--locate_text--six">{t('home.location_text_ten')}</span>
              </div>
              <div className="block--locate_four">
                <span className="info--locate_text--five">{t('home.location_text_six')}</span>
                <span className="info--locate_text--six">{t('home.location_text_eleven')}</span>
              </div>
            </div>
            <div className="info--contact">
              <div className="block--contact">
                <span className="text--contact_one">{t('home.text_contact_one')}</span>
              </div>
              <div className="block--contact_one">
                <span className="text--contact_two">{t('home.text_contact_two')}</span>
                <span className="text--contact_three">{t('home.text_contact_nine')}</span>
              </div>
              <div className="block--contact_one">
                <span className="text--contact_two">{t('home.text_contact_three')}</span>
                <span className="xxxx">{t('home.text_contact_four')}</span>
              </div>
              <div className="block--contact_one">
                <span className="text--contact_two">{t('home.text_contact_five')}</span>
                <span className="xxx">{t('home.text_contact_six')}</span>
              </div>
              <div className="block--contact_one">
                <span className="text--contact_two">{t('home.text_contact_seven')}</span>
                <span className="text--contact_three">{t('home.text_contact_eight')}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer--colum_one">
            <span className="row--one_one">{t('home.footer_one')}</span>
            <span className="row--one_two">{t('home.footer_two')}</span>
            <span className="row--one_three">{t('home.footer_three')}</span>
            <span className="row--one_three">{t('home.footer_four')}</span>
            <span className="row--one_three">{t('home.footer_five')}</span>
          </div>
          <div className="footer--colum_two">
            <span className="row--one_one">{t('home.footer_six')}</span>
            <span className="row--one_two">{t('home.footer_seven')}</span>
            <span className="row--one_three">{t('home.footer_eight')}</span>
            <span className="row--one_three">{t('home.footer_nine')}</span>
            <span className="row--one_three">{t('home.footer_ten')}</span>
          </div>
          <div className="footer--colum_three">
            <span className="row--one_one">{t('home.footer_eleven')}</span>
            <span className="zalo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="50px" height="50px">
                <path
                  fill="#2962ff"
                  d="M15,36V6.827l-1.211-0.811C8.64,8.083,5,13.112,5,19v10c0,7.732,6.268,14,14,14h10 c4.722,0,8.883-2.348,11.417-5.931V36H15z"
                />
                <path
                  fill="#eee"
                  d="M29,5H19c-1.845,0-3.601,0.366-5.214,1.014C10.453,9.25,8,14.528,8,19 c0,6.771,0.936,10.735,3.712,14.607c0.216,0.301,0.357,0.653,0.376,1.022c0.043,0.835-0.129,2.365-1.634,3.742 c-0.162,0.148-0.059,0.419,0.16,0.428c0.942,0.041,2.843-0.014,4.797-0.877c0.557-0.246,1.191-0.203,1.729,0.083 C20.453,39.764,24.333,40,28,40c4.676,0,9.339-1.04,12.417-2.916C42.038,34.799,43,32.014,43,29V19C43,11.268,36.732,5,29,5z"
                />
                <path
                  fill="#2962ff"
                  d="M36.75,27C34.683,27,33,25.317,33,23.25s1.683-3.75,3.75-3.75s3.75,1.683,3.75,3.75 S38.817,27,36.75,27z M36.75,21c-1.24,0-2.25,1.01-2.25,2.25s1.01,2.25,2.25,2.25S39,24.49,39,23.25S37.99,21,36.75,21z"
                />
                <path fill="#2962ff" d="M31.5,27h-1c-0.276,0-0.5-0.224-0.5-0.5V18h1.5V27z" />
                <path
                  fill="#2962ff"
                  d="M27,19.75v0.519c-0.629-0.476-1.403-0.769-2.25-0.769c-2.067,0-3.75,1.683-3.75,3.75 S22.683,27,24.75,27c0.847,0,1.621-0.293,2.25-0.769V26.5c0,0.276,0.224,0.5,0.5,0.5h1v-7.25H27z M24.75,25.5 c-1.24,0-2.25-1.01-2.25-2.25S23.51,21,24.75,21S27,22.01,27,23.25S25.99,25.5,24.75,25.5z"
                />
                <path
                  fill="#2962ff"
                  d="M21.25,18h-8v1.5h5.321L13,26h0.026c-0.163,0.211-0.276,0.463-0.276,0.75V27h7.5 c0.276,0,0.5-0.224,0.5-0.5v-1h-5.321L21,19h-0.026c0.163-0.211,0.276-0.463,0.276-0.75V18z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="50px"
                height="px"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <linearGradient
                  id="3gvvizWQ9RZhriH82V06da"
                  x1="30.574"
                  x2="17.439"
                  y1="3.695"
                  y2="45.444"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#33bef0" />
                  <stop offset="1" stop-color="#0a85d9" />
                </linearGradient>
                <path
                  fill="url(#3gvvizWQ9RZhriH82V06da)"
                  d="M24.5,5C13.73,5,5,13.059,5,23c0,5.386,2.566,10.215,6.627,13.514 c0.233,0.19,0.373,0.47,0.373,0.77v5.098c0,0.743,0.782,1.227,1.447,0.894l5.555-2.777c0.208-0.104,0.443-0.129,0.669-0.075 C21.217,40.79,22.83,41,24.5,41C35.27,41,44,32.941,44,23C44,13.059,35.27,5,24.5,5z"
                />
                <path
                  d="M36.721,19.262c-0.162-0.369-0.521-0.607-0.913-0.607c-0.156,0-0.308,0.037-0.453,0.109l-6.933,3.467 c-0.192,0.096-0.425,0.059-0.577-0.094l-4.12-4.12c-0.189-0.189-0.44-0.293-0.707-0.293c-0.281,0-0.551,0.119-0.74,0.327 l-7.601,8.362c-0.271,0.298-0.339,0.708-0.179,1.07c0.163,0.369,0.522,0.607,0.914,0.607c0.17,0,0.335-0.044,0.491-0.13l5.618-3.121 c0.21-0.117,0.473-0.068,0.627,0.117l4.104,4.925c0.191,0.229,0.471,0.36,0.768,0.36c0.279,0,0.548-0.118,0.737-0.324l8.784-9.582 C36.811,20.037,36.881,19.626,36.721,19.262z"
                  opacity=".07"
                />
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M15.046,26.75l7.601-8.362c0.192-0.211,0.522-0.219,0.724-0.017 l4.374,4.374c0.152,0.152,0.385,0.19,0.577,0.094l7.256-3.628c0.496-0.248,0.967,0.376,0.592,0.785l-8.784,9.582 c-0.205,0.223-0.559,0.215-0.753-0.018l-4.369-5.243c-0.154-0.185-0.417-0.234-0.627-0.117l-5.979,3.322 C15.164,27.798,14.665,27.168,15.046,26.75z"
                  clip-rule="evenodd"
                />
                <path
                  d="M23.017,17.724c0.267,0,0.518,0.104,0.707,0.293l4.12,4.12c0.152,0.152,0.385,0.19,0.577,0.094 l6.933-3.467c0.145-0.073,0.298-0.109,0.453-0.109c0.392,0,0.751,0.238,0.913,0.607c0.16,0.364,0.091,0.775-0.182,1.072 l-8.784,9.582c-0.189,0.206-0.458,0.324-0.737,0.324c-0.298,0-0.578-0.131-0.768-0.36l-4.104-4.925 c-0.154-0.185-0.417-0.234-0.627-0.117l-5.618,3.121c-0.156,0.086-0.321,0.13-0.491,0.13c-0.392,0-0.751-0.238-0.914-0.607 c-0.16-0.362-0.092-0.773,0.179-1.07l7.601-8.362C22.466,17.844,22.736,17.724,23.017,17.724 M23.017,17.224 c-0.422,0-0.826,0.179-1.11,0.491l-7.601,8.362c-0.406,0.446-0.508,1.063-0.266,1.609c0.243,0.549,0.781,0.904,1.371,0.904 c0.256,0,0.503-0.065,0.734-0.193l5.256-2.92c0.21-0.117,0.473-0.068,0.627,0.117l3.839,4.606c0.286,0.343,0.706,0.54,1.152,0.54 c0.419,0,0.822-0.177,1.106-0.486l8.784-9.582c0.408-0.446,0.512-1.063,0.271-1.611c-0.242-0.55-0.78-0.906-1.371-0.906 c-0.234,0-0.462,0.055-0.677,0.162l-6.611,3.306c-0.192,0.096-0.425,0.059-0.577-0.094l-3.865-3.865 C23.794,17.38,23.418,17.224,23.017,17.224L23.017,17.224z"
                  opacity=".05"
                />
              </svg>
            </span>
          </div>
          <div className="footer--colum_four">
            <span className="row--one_one">{t('home.footer_1')}</span>
            <span className="row--one_two">
              {t('home.footer_2')} <FaFacebookF className="facebook" /> <AiFillYoutube className="ytb" />
              <BsInstagram className="instagram" />
            </span>
          </div>
        </div>
        <div className="hodace-footer--one">
          <div className="hodace-footer_one">{t('home.header_one')}</div>
          <div className="hodace-footer_two">{t('home.header_two')}</div>

          <span className="hodace-footer_three">{t('home.header_three')}</span>
          <div className="sec--hodace"></div>
          <div className="sec--hodace__text--x">{t('Copyright @2020 All rights reserved by HODACE NETWORK')}</div>
          <div className="sec--hodace__text--x1">
            {t('Ghi rõ nguồn "Hodace.Network" Khi phát hành tại thông tin từ website này.')}
          </div>
        </div>
      </div>
      <div className="x--1"></div>
    </div>
  );
};

export default HomeView;
