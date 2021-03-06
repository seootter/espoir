package login;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.time.LocalDateTime;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login2")
public class Login2 extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		LocalDateTime ldt = LocalDateTime.now();
		
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			System.out.println("2드라이버 로딩 전");
			
			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000");
			
			String sql = "UPDATE infomation SET loginDate=?";
			
			PreparedStatement pstmt = connection.prepareStatement(sql);
			
			pstmt.setObject(1, ldt);
			
			pstmt.executeUpdate();
			
			pstmt.close();
			connection.close();
		} catch(ClassNotFoundException e) {
			System.out.println("2드라이버 로딩 실패");
		} catch(SQLException e) {
			System.out.println("2DBMS 접속 실패");
		}
		
		return;
	}

}
