package signup;

import java.io.IOException;
//import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/signup3")
public class SignUp3 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html;charset=UTF-8");
//		PrintWriter out = response.getWriter();
		
		String id = request.getParameter("Id");
		String pw = request.getParameter("Pw");
		
		LocalDateTime ldt = LocalDateTime.now();
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			System.out.println("3드라이버 로딩 전");
			
			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000");
			
			String sql = "INSERT INTO infomation(id, pw, signupDate) VALUES (?, ?, ?)";
			
			PreparedStatement pstmt = connection.prepareStatement(sql);
			
			pstmt.setString(1, id);
			pstmt.setString(2, pw);
			pstmt.setObject(3, ldt);
				
			pstmt.executeUpdate();
			
			pstmt.close();
			connection.close();
			
		}catch (ClassNotFoundException e) {
			System.out.println("3드라이버 로딩 실패");
		} catch(SQLException e) {
			System.out.println("3DBMS 접속 실패");
		}
		
		RequestDispatcher rd = request.getRequestDispatcher("/join completion.html");
		rd.forward(request, response);
		
		return;
	}

}
