package signup;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup1")
public class SignUp1 extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();

		String id = request.getParameter("Id");
		String pw1 = request.getParameter("Pw");
		String pw2 = request.getParameter("PwRe");

		if (id != null && pw1 != null && pw2 != null) {
			// 공백 제거
			id = id.trim();
			pw1 = pw1.trim();
			pw2 = pw2.trim();

			// 중간에 들어가는 공백 제거
			id = id.replace(" ", "");
			pw1 = pw1.replace(" ", "");
			pw2 = pw2.replace(" ", "");
		}
		// 48~57 number
		// 65~90 bigAlpha
		// 97~122 smallAlpha

//		if(id!=null || !(id.isEmpty())) {
//			for(int i=0; i<id.length(); i++) {
//				if(id[i]
//		}

		if ((id == null || pw1 == null || pw2 == null) || (id.isEmpty() || pw1.isEmpty() || pw2.isEmpty())) {
			// 공백일 시 오류코드 발생
			out.write("다시 확인해주세요");
		} else if ((id.length() < 4 && id.length() > 12) || (pw1.length() < 8 || pw1.length() > 16)) {
			// 아이디 4-12자 / 비밀번호 8-16자
			out.write("다시 확인해주세요");
		} else if (!pw1.equals(pw2)) {
			// 비밀번호 확인
			out.write("비밀번호가 일치하지 않습니다");
		} else {
			// 이상 없을 시 다음 회원가입 단계로 넘어가기
			RequestDispatcher rd = request.getRequestDispatcher("/signup2");
			rd.forward(request, response);
		}

		out.close();
	}

}
