package data.service.user;

import data.domain.user.MyPage;
import data.domain.user.User;
import data.repository.user.MyPageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class MyPageService {
    private final MyPageRepository myPageRepository;
    //마이페이지 유저 정보 출력
    public User selectUser (String user_pk) {
        return myPageRepository.selectUser(user_pk);
    }
    //마이페이지 회원 정보 수정
    public void updateUser (User user) {
        myPageRepository.updateUser(user);
    }
    //마이페이지 예매 목록 조회
    public List<MyPage> selectBooking (String user_pk) {
        return myPageRepository.selectBooking(user_pk);
    }
    //마이페이지 무비로그 조회
    public List<MyPage> selectMovieLog (String user_pk) {
        return myPageRepository.selectMovieLog(user_pk);
    }
    //마이페이지 포인트 조회
    public int selectPoint (String user_pk) {
        return myPageRepository.selectPoint(user_pk);
    }
    //마이페이지 포인트 적립/소멸 조회
    public List<MyPage> selectPointDetail (String user_pk) {
        return myPageRepository.selectPointDetail(user_pk);
    }
}
