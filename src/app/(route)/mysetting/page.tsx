import Image from 'next/image';
import { MdPeopleAlt } from 'react-icons/md';

export default function mysetting() {
    return (
        <>
            <div className="flex items-center justify-center bg-white w-full">
                <div className="flex flex-col items-start justify-center p-10">
                    <div className="flex flex-col">
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
                                <div>
                                    <p className="font-semibold text-2xl mb-2">닉네임</p>
                                    <p className="text-base mb-2 text-velogauthgray-300">소개말</p>
                                    <button className="text-base text-velogauthgreen-100 underline hover:opacity-80">
                                        수정
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col bg-white mt-10">
                        <div className="flex flex-row p-2">
                            <p className="font-semibold text-base mr-5">벨로그 제목</p>
                            <p className="text-base">벨로그 제목내용</p>
                            <button className="ml-auto text-velogauthgreen-100 underline hover:opacity-80">수정</button>
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1 border-b-velogauthgrey-100 border-b-2">
                            개인 페이지의 좌측 상단에 나타는 페이지 제목입니다
                        </p>

                        <div className="flex flex-row p-2 mt-2">
                            <p className="font-semibold text-base mr-5">이메일 주소</p>
                            <p className="text-base">이메일 </p>
                            <button className="ml-auto text-velogauthgreen-100 underline hover:opacity-80">변경</button>
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1 border-b-velogauthgrey-100 border-b-2">
                            회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다.
                        </p>
                        <div className="flex flex-row p-2 mt-2">
                            <p className="font-semibold text-base mr-5">회원 탈퇴</p>
                            <button className="ml-4 px-4 py-0.5 text-base bg-red-400 rounded text-l text-white hover:opacity-80">
                                회원 탈퇴
                            </button>
                        </div>
                        <p className="text-velogauthgray-300 text-sm ml-2 mt-1">
                            탈퇴 시 작성하신 포스트 및 댓글이 모두 삭제되며 복구되지 않습니다.{' '}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
