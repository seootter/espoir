package login;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;

//import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
@WebServlet("/login1")
public class Login1 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
		PrintWriter out = response.getWriter();
		LocalDateTime ldt = LocalDateTime.now();
		
		String id = request.getParameter("Id");
		String pw = request.getParameter("Pw");
		
		int result = 0;
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			System.out.println("드라이버 로딩 전");
			
			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000");
			
			String sql = "SELECT pw FROM infomation WHERE id = ?";
			
			PreparedStatement pstmt = connection.prepareStatement(sql);
			
			pstmt.setString(1, id);
			
			ResultSet rs = pstmt.executeQuery();
			
			if(rs.next()) {
				if(rs.getNString(1).contentEquals(pw)) {
					out.write("로그인 성공");
					
					result = 1;
					
					sql = "UPDATE infomation SET loginDate=? WHERE id = ?";
					pstmt = connection.prepareStatement(sql);
					
					pstmt.setObject(1, ldt);
					pstmt.setString(2, id);
					
					pstmt.executeUpdate();
				}
				else {
					out.write("비밀번호를 다시 확인해주세요.");
					
					result = 2;
				}
			}
			
			rs.close();
			pstmt.close();
			connection.close();
		} catch(ClassNotFoundException e) {
			System.out.println("드라이버 로딩 실패");
		} catch(SQLException e) {
			System.out.println("DBMS 접속 실패");
		}
		
		if(result == 0) {
			out.write("아이디를 다시 확인해주세요.");	
		}
		
		out.close();
	}

}
