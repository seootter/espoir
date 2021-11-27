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
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		
		String id = request.getParameter("Id");
		String pw1 = request.getParameter("Pw");
		String pw2 = request.getParameter("PwRe");
		
		if(id != null && pw1 != null && pw2 != null) {
			// ���� ����
			id = id.trim();
			pw1 = pw1.trim();
			pw2 = pw2.trim();
			
			// �߰��� ���� ���� ����
			id = id.replace(" ", "");
			pw1 = pw1.replace(" ", "");
			pw2 = pw2.replace(" ", "");
		}
		// 48~57 number
		// 65~90 bigAlpha
		// 97~122 smallAlpha
		
//		if(id!=null || !(id.isEmpty())) {
//			for()
//		}
		
		if((id == null || pw1 == null || pw2 == null) || (id.isEmpty() || pw1.isEmpty() || pw2.isEmpty())) {
			// ������ �� �����ڵ� �߻�
			response.setStatus(401);
		}else if( (id.length() < 4 && id.length() > 12) || (pw1.length() < 8 || pw1.length() > 16)) {
			// ���̵� 4-12�� / ��й�ȣ 8-16��
			response.setStatus(401);
		}else if(!pw1.equals(pw2)) {
			// ��й�ȣ Ȯ��
			response.setStatus(401);
		}else {
			// �̻� ���� �� ���� ȸ������ �ܰ�� �Ѿ��
			RequestDispatcher rd = request.getRequestDispatcher("/signup2");
			rd.forward(request, response);
		}
		
		out.close();
	}

}
