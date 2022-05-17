import subprocess as sp
class Program:
    def __init__(self, program_text, file_extension):
        self.program_text = program_text
        self.file_extension = file_extension
    
    def compile(self):
        with open(f"main.{self.file_extension}", "w") as f:
            for i in self.program_text:
                f.writelines(f"{i}\n")
    
    def run(self):
        file_name = f"main.{self.file_extension}"
        with open(file_name, "r") as f:
            # Python programming language
            if self.file_extension == "py":
                result = str(sp.getoutput("py main.py")).replace("\n", "<br>")
                return result
            # C programming language
            elif self.file_extension == "c":
                pass
            # C++ programming language
            elif self.file_extension == "cpp":
                pass
            # Java programming language
            elif self.file_extension == "java":
                pass
            # Javascript programming language
            elif self.file_extension == "javascript":
                pass