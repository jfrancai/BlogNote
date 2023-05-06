# Makefile: Automatic Variables

From Managing Projects with GnU Make:

> Automatic variables are set by make after a rule is matched. They provide access to elements from the target and prerequisite lists so you don’t have to explicitly specify any filenames. They are very useful for avoiding code duplication, but are critical when defining more general pattern rules.

* $@ evaluates to the target of the rule
* $< evauates to the first prerequisites
* $^ evaluates to the list of prerequisites

```make
NAME := megaphone

CC := c++
CFLAGS := -Wall -Werror -Wextra -std=c++98

SRCS := megaphone.cpp
OBJS := $(SRCS:%.cpp=%.o)

all: $(SRCS)
	make $(NAME)

$(NAME): $(OBJS)
	$(CC) $(CFLAGS) $^ -o $@

%.o: %.cpp
	$(CC) $(CFLAGS) -c $< -o $@

.PHONY: all
```

More details: [Automatic Variables](https://www.gnu.org/software/make/manual/html_node/Automatic-Variables.html)

    #Makefile #make
