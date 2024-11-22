FROM maven:latest AS builder

WORKDIR /app

COPY pom.xml .
COPY src ./src
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk

WORKDIR /app


COPY --from=builder /app/target/admin-0.0.1-SNAPSHOT.jar ./book-review-backend.jar

EXPOSE 8080

CMD ["java", "-jar", "book-review-backend.jar"]
