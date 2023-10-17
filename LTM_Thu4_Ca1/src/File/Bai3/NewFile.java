package src.File.Bai3;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;

public class File {



    public void copyFile(String sourceFile, String destFile, boolean moved){

    }

    public void split(String path, long size){

    }

    public void join(String pathFolder) {

    }
    public static void main(String[] args) throws FileNotFoundException {
        String path1 = "D:\\IdeaProjects\\LTM_Thu4_Ca1\\src\\File\\Test\\demo.txt";
        String path2 = "D:\\IdeaProjects\\LTM_Thu4_Ca1\\src\\File\\Test\\test.txt";

        FileOutputStream fos = new FileOutputStream(path);
        fos.write(65);
        fos.close();
        System.out.println("Run");
    }
}
