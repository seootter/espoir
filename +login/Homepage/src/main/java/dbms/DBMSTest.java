//package dbms;
//
//import java.sql.Connection;
//import java.sql.DriverManager;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class DBMSTest {
//	public static void main(String[] args) {
//		response.setContentType("text/html;charset=UTF-8");
//		
//		String id = request.getParameter("Id");
//		String pw1 = request.getParameter("Pw");
//		
//		try {
//			Class.forName("org.mariadb.jdbc.Driver");
//			
//			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000"); // DB에 연결
//			
//			String sql = "INSERT INTO memberinfomation(id,pw) VALUES(?,?)";
//			
//			PreparedStatement pstmt = connection.prepareStatement("sql");
//			
//			pstmt.setString(1, id);
//			pstmt.setString(2, pw);
//			
//			pstmt.executeUpdate();
//			
//			pstmt.close();
//			connection.close();
//			
//		} catch (ClassNotFoundException e) {
//			System.out.println("드라이버 로딩 실패");
//		} catch (SQLException e) {
//			System.out.println("DBMS 접속 실패");
//		}
//	}
//}
