;; 练习1.5 Ben Bitdiddle发明了一种检测方法，能够确定解释器究竟采用哪种序求值，是采用应用序，还是采用正则序。他定义了下面两个过程：

;; (define (p) (p))
;; (define (test x y)
;;   (if (= x 0)
;;       0
;;       y))
(defun p() #'p)
(defun test(x y)
  (if (= x 0)
      0
      y)
)

(write (test 0 p))