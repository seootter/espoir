package dbms;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class TimeTest {

	public static void main(String[] args) {
		LocalDateTime dateTime = LocalDateTime.now();
		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy년 MM월 dd일 HH시 mm분 ss초");
		
		String ldt = dtf.format(dateTime);
//		LocalDateTime ldt = LocalDateTime.parse(dateTime, dtf);
		
		System.out.println(ldt);
		
	}

}
