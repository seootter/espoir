package signup;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedHashMap;

import javax.servlet.RequestDispatcher;
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
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
//	       // 아이디 중복 확인
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();

		String id = request.getParameter("Id");
		
		int nextpage = 0;
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			System.out.println("2드라이버 로딩 전");
			
			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000");
			
			String sql = "SELECT * FROM infomation WHERE id = ?";
			
			PreparedStatement pstmt = connection.prepareStatement(sql);
			
			pstmt.setString(1, id);
			
			ResultSet rs = pstmt.executeQuery();
			
			if(rs.next()) {
					// 아이디가 중복되면 오류
					out.write("아이디가 중복됩니다.");
					
					nextpage = 1;
			}
			
			rs.close();
			pstmt.close();
			connection.close();
			
			System.out.println("2드라이버 로딩 성공");
			
		} catch (ClassNotFoundException e) {
				System.out.println("2드라이버 로딩 실패");
		} catch(SQLException e) {
			System.out.println("2DBMS 접속 실패");
		}
		
		if(nextpage == 0) {
			RequestDispatcher rd = request.getRequestDispatcher("/signup3");
			rd.forward(request, response);
		}
		
		out.close();
	}
}