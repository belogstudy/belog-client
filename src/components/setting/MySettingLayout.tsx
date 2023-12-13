import React from 'react';
import { MdPeopleAlt } from 'react-icons/md';

interface MySettingLayoutProps {
    nickEdit: React.ReactElement;
    velogTitleEdit: React.ReactElement;
    emailEdit: React.ReactElement;
    acountDelete: React.ReactElement;
}

export const MySettingLayout: React.FC<MySettingLayoutProps> = ({
    nickEdit,
    velogTitleEdit,
    emailEdit,
    acountDelete,
}) => {
    return (
        <>
            <div className="flex items-center justify-center bg-white">
                <div className="flex-col items-center justify-center p-10 w-[768px]">
                    <div className="flex items-start flex-col">
                        <div className="flex justify-center">
                            <div className="flex-col flex items-center justify-center">
                                <MdPeopleAlt
                                    className="rounded-full border-2 border-velogauthgray-400 bg-gray-300 mb-4"
                                    size={120}
                                    alt="사람"
                                />
                                <button className="bg-velogauthgreen-100 rounded text-base text-white p-1 hover:opacity-80">
                                    이미지 업로드
                                </button>
                                <button className="bg-white text-velogauthgreen-100 text-base p-2 hover:opacity-80">
                                    이미지 제거
                                </button>
                            </div>
                            <div className="flex flex-row items-start justify-left p-10 ">
                                {/* 이 붜분 분리 */}
                                {nickEdit}

                                {/* 이 붜분 분리 */}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-10">
                        <div className="flex flex-row p-2">
                            <p className="font-semibold text-base mr-5">벨로그 제목</p>

                            {/* 이 붜분 분리 */}
                            {velogTitleEdit}
                            {/* 이 붜분 분리 */}
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1 border-b-velogauthgrey-100 border-b-2">
                            개인 페이지의 좌측 상단에 나타는 페이지 제목입니다
                        </p>

                        <div className="flex flex-row p-2 mt-2">
                            <p className="font-semibold text-base mr-5">이메일 주소</p>
                            {/* 이 붜분 분리 */}
                            {emailEdit}
                            {/* 이 붜분 분리 */}
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1 border-b-velogauthgrey-100 border-b-2">
                            회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
                        </p>
                        <div className="flex flex-row p-2 mt-2">
                            {/* 이 붜분 분리 */}
                            {acountDelete}

                            {/* 이 붜분 분리 */}
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1">
                            탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
