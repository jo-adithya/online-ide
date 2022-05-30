import subprocess as sp
import os
class Program:
    GLOBAL_FILE_PATH = "files"
    def __init__(self, program_text, file_extension):
        self.program_text = program_text
        self.file_extension = file_extension
        self.file_name = os.path.join(Program.GLOBAL_FILE_PATH, f"main{self.file_extension}")
    
    def compile(self):
        with open(self.file_name, "w") as f:
            for i in self.program_text:
                f.writelines(f"{i}\n")
    
    def run(self):
        with open(self.file_name, "r") as f:
            # Python programming language
            if self.file_extension == ".py":
                result = str(sp.getoutput(f"py {self.file_name}")).replace("\n", "<br>")
                return result
            # C or C++ programming language
            elif self.file_extension == ".c" or self.file_extension == ".cpp":
                file_output = os.path.join(Program.GLOBAL_FILE_PATH, "main")
                sp.call(f"gcc {self.file_name} -o {file_output}")
                result = str(sp.getoutput(f"{file_output}.exe"))
                return result
            # Java programming language
            elif self.file_extension == ".java":
                sp.call(f"javac {self.file_name}")
                result = str(sp.getoutput(f"java {Program.GLOBAL_FILE_PATH}.main"))
                return result
            # Javascript programming language
            elif self.file_extension == ".js":
                result = str(sp.getoutput(f"node {self.file_name}"))
                return result