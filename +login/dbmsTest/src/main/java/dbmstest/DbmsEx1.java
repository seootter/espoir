package dbmstest;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

public class DbmsEx1 {
	public static void main(String[] args) {
		try {
			Class.forName("org.mariadb.jdbc.Driver");
			
			System.out.println("드라이버 로딩 전");
			
			Connection connection = DriverManager.getConnection("jdbc:mariadb://localhost:3306/memberinfo?user=root&password=0000");
			
			String sql = "INSERT INTO infomation(id, pw) VALUES (?, ?)";
			
			PreparedStatement pstmt = connection.prepareStatement(sql);
			
			pstmt.setString(1, "aaaa");
			pstmt.setString(2, "12345678");
			
			pstmt.executeUpdate();
			
			
			pstmt.close();
			connection.close();
			
			System.out.println("드라이버 로딩 성공");
		} 
		catch (ClassNotFoundException e) {
			System.out.println("드라이버 로딩 실패");
		}
		catch(SQLException e) {
			System.out.println("DBMS 접속 실패");
		}
	}
}
