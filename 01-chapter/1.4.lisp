(defun aPlusAbsB (a b)
  (if (< b 0) (- a b) (+ a b))
)

(print (aPlusAbsB 1 -2))