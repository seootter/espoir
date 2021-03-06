package signup;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.LinkedHashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup2")
public class SignUp2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
	LinkedHashMap<String, String> map = new LinkedHashMap<>();
	
	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
//	       // 아이디 중복 확인
			response.setContentType("text/html;charset=UTF-8");
			PrintWriter out = response.getWriter();
			
			String id = request.getParameter("id");
			String pw = request.getParameter("password");
			
			if(map!=null) {
				if(map.containsKey(id)) {
					// 아이디가 중복되면 오류코드
					response.setStatus(HttpServletResponse.SC_PRECONDITION_FAILED);
				} else {
					// 아이디가 중복되지 않으면 저장
					map.put(id, pw);
					
					out.write("가입완료");
				}
			} else {
				return;
			}
			
			out.close();
	}
	
}
